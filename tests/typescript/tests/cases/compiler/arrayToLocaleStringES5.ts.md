__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 26
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 30,
                "end": 31
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 33,
                "end": 34
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 36,
                "end": 37
              }
            ],
            "start": 29,
            "end": 38
          },
          "definite": false,
          "start": 23,
          "end": 38
        }
      ],
      "declare": false,
      "start": 17,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 43
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 49
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 64
            },
            "optional": false,
            "computed": false,
            "start": 46,
            "end": 64
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 46,
          "end": 66
        },
        "start": 40,
        "end": 66
      },
      "directive": null,
      "start": 40,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 77
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 83
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 98
            },
            "optional": false,
            "computed": false,
            "start": 80,
            "end": 98
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 99,
              "end": 106
            }
          ],
          "optional": false,
          "start": 80,
          "end": 107
        },
        "start": 74,
        "end": 107
      },
      "directive": null,
      "start": 74,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 131
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 137
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 152
            },
            "optional": false,
            "computed": false,
            "start": 134,
            "end": 152
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 153,
              "end": 160
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 164,
                    "end": 169
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 171,
                    "end": 181
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 164,
                  "end": 181
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 191
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 193,
                    "end": 198
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 183,
                  "end": 198
                }
              ],
              "start": 162,
              "end": 200
            }
          ],
          "optional": false,
          "start": 134,
          "end": 201
        },
        "start": 128,
        "end": 201
      },
      "directive": null,
      "start": 128,
      "end": 202
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
            "name": "dates",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 245,
                      "end": 249
                    },
                    "typeArguments": null,
                    "start": 245,
                    "end": 249
                  },
                  "start": 245,
                  "end": 251
                },
                "start": 236,
                "end": 251
              },
              "start": 234,
              "end": 251
            },
            "start": 229,
            "end": 251
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 263
                },
                "typeArguments": null,
                "arguments": [],
                "start": 255,
                "end": 265
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 275
                },
                "typeArguments": null,
                "arguments": [],
                "start": 267,
                "end": 277
              }
            ],
            "start": 254,
            "end": 278
          },
          "definite": false,
          "start": 229,
          "end": 278
        }
      ],
      "declare": false,
      "start": 223,
      "end": 279
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 280,
          "end": 283
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 291
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 306
            },
            "optional": false,
            "computed": false,
            "start": 286,
            "end": 306
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 286,
          "end": 308
        },
        "start": 280,
        "end": 308
      },
      "directive": null,
      "start": 280,
      "end": 309
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 316,
          "end": 319
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 327
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 342
            },
            "optional": false,
            "computed": false,
            "start": 322,
            "end": 342
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "fr",
              "raw": "'fr'",
              "start": 343,
              "end": 347
            }
          ],
          "optional": false,
          "start": 322,
          "end": 348
        },
        "start": 316,
        "end": 348
      },
      "directive": null,
      "start": 316,
      "end": 349
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 372
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 380
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 395
            },
            "optional": false,
            "computed": false,
            "start": 375,
            "end": 395
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "fr",
              "raw": "'fr'",
              "start": 396,
              "end": 400
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "timeZone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 404,
                    "end": 412
                  },
                  "value": {
                    "type": "Literal",
                    "value": "UTC",
                    "raw": "'UTC'",
                    "start": 414,
                    "end": 419
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 404,
                  "end": 419
                }
              ],
              "start": 402,
              "end": 421
            }
          ],
          "optional": false,
          "start": 375,
          "end": 422
        },
        "start": 369,
        "end": 422
      },
      "directive": null,
      "start": 369,
      "end": 423
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
            "name": "int8Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 450,
            "end": 459
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 475
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 476,
                "end": 477
              }
            ],
            "start": 462,
            "end": 478
          },
          "definite": false,
          "start": 450,
          "end": 478
        }
      ],
      "declare": false,
      "start": 444,
      "end": 479
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 480,
          "end": 483
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 486,
              "end": 495
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 510
            },
            "optional": false,
            "computed": false,
            "start": 486,
            "end": 510
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 486,
          "end": 512
        },
        "start": 480,
        "end": 512
      },
      "directive": null,
      "start": 480,
      "end": 513
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 520,
          "end": 523
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 535
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 550
            },
            "optional": false,
            "computed": false,
            "start": 526,
            "end": 550
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 551,
              "end": 558
            }
          ],
          "optional": false,
          "start": 526,
          "end": 559
        },
        "start": 520,
        "end": 559
      },
      "directive": null,
      "start": 520,
      "end": 560
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 580,
          "end": 583
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 595
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 596,
              "end": 610
            },
            "optional": false,
            "computed": false,
            "start": 586,
            "end": 610
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 611,
              "end": 618
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 627
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 629,
                    "end": 639
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 622,
                  "end": 639
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 641,
                    "end": 649
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 651,
                    "end": 656
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 641,
                  "end": 656
                }
              ],
              "start": 620,
              "end": 658
            }
          ],
          "optional": false,
          "start": 586,
          "end": 659
        },
        "start": 580,
        "end": 659
      },
      "directive": null,
      "start": 580,
      "end": 660
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
            "name": "uint8Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 687,
            "end": 697
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 714
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 715,
                "end": 716
              }
            ],
            "start": 700,
            "end": 717
          },
          "definite": false,
          "start": 687,
          "end": 717
        }
      ],
      "declare": false,
      "start": 681,
      "end": 718
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 719,
          "end": 722
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 735
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 750
            },
            "optional": false,
            "computed": false,
            "start": 725,
            "end": 750
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 725,
          "end": 752
        },
        "start": 719,
        "end": 752
      },
      "directive": null,
      "start": 719,
      "end": 753
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 760,
          "end": 763
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 776
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 777,
              "end": 791
            },
            "optional": false,
            "computed": false,
            "start": 766,
            "end": 791
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 792,
              "end": 799
            }
          ],
          "optional": false,
          "start": 766,
          "end": 800
        },
        "start": 760,
        "end": 800
      },
      "directive": null,
      "start": 760,
      "end": 801
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 821,
          "end": 824
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 827,
              "end": 837
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 838,
              "end": 852
            },
            "optional": false,
            "computed": false,
            "start": 827,
            "end": 852
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 853,
              "end": 860
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 864,
                    "end": 869
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 871,
                    "end": 881
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 864,
                  "end": 881
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 883,
                    "end": 891
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 893,
                    "end": 898
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 883,
                  "end": 898
                }
              ],
              "start": 862,
              "end": 900
            }
          ],
          "optional": false,
          "start": 827,
          "end": 901
        },
        "start": 821,
        "end": 901
      },
      "directive": null,
      "start": 821,
      "end": 902
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
            "name": "uint8ClampedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 929,
            "end": 946
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 953,
              "end": 970
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 971,
                "end": 972
              }
            ],
            "start": 949,
            "end": 973
          },
          "definite": false,
          "start": 929,
          "end": 973
        }
      ],
      "declare": false,
      "start": 923,
      "end": 974
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 975,
          "end": 978
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 998
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1013
            },
            "optional": false,
            "computed": false,
            "start": 981,
            "end": 1013
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 981,
          "end": 1015
        },
        "start": 975,
        "end": 1015
      },
      "directive": null,
      "start": 975,
      "end": 1016
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1023,
          "end": 1026
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1029,
              "end": 1046
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1047,
              "end": 1061
            },
            "optional": false,
            "computed": false,
            "start": 1029,
            "end": 1061
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1062,
              "end": 1069
            }
          ],
          "optional": false,
          "start": 1029,
          "end": 1070
        },
        "start": 1023,
        "end": 1070
      },
      "directive": null,
      "start": 1023,
      "end": 1071
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1091,
          "end": 1094
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1097,
              "end": 1114
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1129
            },
            "optional": false,
            "computed": false,
            "start": 1097,
            "end": 1129
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1130,
              "end": 1137
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1141,
                    "end": 1146
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1148,
                    "end": 1158
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1141,
                  "end": 1158
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1160,
                    "end": 1168
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1170,
                    "end": 1175
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1160,
                  "end": 1175
                }
              ],
              "start": 1139,
              "end": 1177
            }
          ],
          "optional": false,
          "start": 1097,
          "end": 1178
        },
        "start": 1091,
        "end": 1178
      },
      "directive": null,
      "start": 1091,
      "end": 1179
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
            "name": "int16Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1206,
            "end": 1216
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1223,
              "end": 1233
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1234,
                "end": 1235
              }
            ],
            "start": 1219,
            "end": 1236
          },
          "definite": false,
          "start": 1206,
          "end": 1236
        }
      ],
      "declare": false,
      "start": 1200,
      "end": 1237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1238,
          "end": 1241
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1244,
              "end": 1254
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1255,
              "end": 1269
            },
            "optional": false,
            "computed": false,
            "start": 1244,
            "end": 1269
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1244,
          "end": 1271
        },
        "start": 1238,
        "end": 1271
      },
      "directive": null,
      "start": 1238,
      "end": 1272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1279,
          "end": 1282
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1285,
              "end": 1295
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1296,
              "end": 1310
            },
            "optional": false,
            "computed": false,
            "start": 1285,
            "end": 1310
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1311,
              "end": 1318
            }
          ],
          "optional": false,
          "start": 1285,
          "end": 1319
        },
        "start": 1279,
        "end": 1319
      },
      "directive": null,
      "start": 1279,
      "end": 1320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1340,
          "end": 1343
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1346,
              "end": 1356
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1357,
              "end": 1371
            },
            "optional": false,
            "computed": false,
            "start": 1346,
            "end": 1371
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1372,
              "end": 1379
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1383,
                    "end": 1388
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1390,
                    "end": 1400
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1383,
                  "end": 1400
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1402,
                    "end": 1410
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1412,
                    "end": 1417
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1402,
                  "end": 1417
                }
              ],
              "start": 1381,
              "end": 1419
            }
          ],
          "optional": false,
          "start": 1346,
          "end": 1420
        },
        "start": 1340,
        "end": 1420
      },
      "directive": null,
      "start": 1340,
      "end": 1421
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
            "name": "uint16Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1448,
            "end": 1459
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1466,
              "end": 1477
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1478,
                "end": 1479
              }
            ],
            "start": 1462,
            "end": 1480
          },
          "definite": false,
          "start": 1448,
          "end": 1480
        }
      ],
      "declare": false,
      "start": 1442,
      "end": 1481
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1482,
          "end": 1485
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1488,
              "end": 1499
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1514
            },
            "optional": false,
            "computed": false,
            "start": 1488,
            "end": 1514
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1488,
          "end": 1516
        },
        "start": 1482,
        "end": 1516
      },
      "directive": null,
      "start": 1482,
      "end": 1517
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1524,
          "end": 1527
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1530,
              "end": 1541
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1542,
              "end": 1556
            },
            "optional": false,
            "computed": false,
            "start": 1530,
            "end": 1556
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1557,
              "end": 1564
            }
          ],
          "optional": false,
          "start": 1530,
          "end": 1565
        },
        "start": 1524,
        "end": 1565
      },
      "directive": null,
      "start": 1524,
      "end": 1566
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1586,
          "end": 1589
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1592,
              "end": 1603
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1604,
              "end": 1618
            },
            "optional": false,
            "computed": false,
            "start": 1592,
            "end": 1618
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1619,
              "end": 1626
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1630,
                    "end": 1635
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1637,
                    "end": 1647
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1630,
                  "end": 1647
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1649,
                    "end": 1657
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1659,
                    "end": 1664
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1649,
                  "end": 1664
                }
              ],
              "start": 1628,
              "end": 1666
            }
          ],
          "optional": false,
          "start": 1592,
          "end": 1667
        },
        "start": 1586,
        "end": 1667
      },
      "directive": null,
      "start": 1586,
      "end": 1668
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
            "name": "int32Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1695,
            "end": 1705
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1712,
              "end": 1722
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1723,
                "end": 1724
              }
            ],
            "start": 1708,
            "end": 1725
          },
          "definite": false,
          "start": 1695,
          "end": 1725
        }
      ],
      "declare": false,
      "start": 1689,
      "end": 1726
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1727,
          "end": 1730
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1733,
              "end": 1743
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1744,
              "end": 1758
            },
            "optional": false,
            "computed": false,
            "start": 1733,
            "end": 1758
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1733,
          "end": 1760
        },
        "start": 1727,
        "end": 1760
      },
      "directive": null,
      "start": 1727,
      "end": 1761
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1768,
          "end": 1771
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1774,
              "end": 1784
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1785,
              "end": 1799
            },
            "optional": false,
            "computed": false,
            "start": 1774,
            "end": 1799
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1800,
              "end": 1807
            }
          ],
          "optional": false,
          "start": 1774,
          "end": 1808
        },
        "start": 1768,
        "end": 1808
      },
      "directive": null,
      "start": 1768,
      "end": 1809
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1829,
          "end": 1832
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1835,
              "end": 1845
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1846,
              "end": 1860
            },
            "optional": false,
            "computed": false,
            "start": 1835,
            "end": 1860
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1861,
              "end": 1868
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1872,
                    "end": 1877
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1879,
                    "end": 1889
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1872,
                  "end": 1889
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1891,
                    "end": 1899
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1901,
                    "end": 1906
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1891,
                  "end": 1906
                }
              ],
              "start": 1870,
              "end": 1908
            }
          ],
          "optional": false,
          "start": 1835,
          "end": 1909
        },
        "start": 1829,
        "end": 1909
      },
      "directive": null,
      "start": 1829,
      "end": 1910
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
            "name": "uint32Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1937,
            "end": 1948
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1955,
              "end": 1966
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1967,
                "end": 1968
              }
            ],
            "start": 1951,
            "end": 1969
          },
          "definite": false,
          "start": 1937,
          "end": 1969
        }
      ],
      "declare": false,
      "start": 1931,
      "end": 1970
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1971,
          "end": 1974
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1977,
              "end": 1988
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1989,
              "end": 2003
            },
            "optional": false,
            "computed": false,
            "start": 1977,
            "end": 2003
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1977,
          "end": 2005
        },
        "start": 1971,
        "end": 2005
      },
      "directive": null,
      "start": 1971,
      "end": 2006
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2013,
          "end": 2016
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2019,
              "end": 2030
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2031,
              "end": 2045
            },
            "optional": false,
            "computed": false,
            "start": 2019,
            "end": 2045
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2046,
              "end": 2053
            }
          ],
          "optional": false,
          "start": 2019,
          "end": 2054
        },
        "start": 2013,
        "end": 2054
      },
      "directive": null,
      "start": 2013,
      "end": 2055
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2075,
          "end": 2078
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2081,
              "end": 2092
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2093,
              "end": 2107
            },
            "optional": false,
            "computed": false,
            "start": 2081,
            "end": 2107
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2108,
              "end": 2115
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2119,
                    "end": 2124
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2126,
                    "end": 2136
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2119,
                  "end": 2136
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2138,
                    "end": 2146
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2148,
                    "end": 2153
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2138,
                  "end": 2153
                }
              ],
              "start": 2117,
              "end": 2155
            }
          ],
          "optional": false,
          "start": 2081,
          "end": 2156
        },
        "start": 2075,
        "end": 2156
      },
      "directive": null,
      "start": 2075,
      "end": 2157
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
            "name": "float32Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2184,
            "end": 2196
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2203,
              "end": 2215
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2216,
                "end": 2217
              }
            ],
            "start": 2199,
            "end": 2218
          },
          "definite": false,
          "start": 2184,
          "end": 2218
        }
      ],
      "declare": false,
      "start": 2178,
      "end": 2219
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2220,
          "end": 2223
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2226,
              "end": 2238
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2239,
              "end": 2253
            },
            "optional": false,
            "computed": false,
            "start": 2226,
            "end": 2253
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2226,
          "end": 2255
        },
        "start": 2220,
        "end": 2255
      },
      "directive": null,
      "start": 2220,
      "end": 2256
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2263,
          "end": 2266
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2269,
              "end": 2281
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2282,
              "end": 2296
            },
            "optional": false,
            "computed": false,
            "start": 2269,
            "end": 2296
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2297,
              "end": 2304
            }
          ],
          "optional": false,
          "start": 2269,
          "end": 2305
        },
        "start": 2263,
        "end": 2305
      },
      "directive": null,
      "start": 2263,
      "end": 2306
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2326,
          "end": 2329
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2332,
              "end": 2344
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2345,
              "end": 2359
            },
            "optional": false,
            "computed": false,
            "start": 2332,
            "end": 2359
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2360,
              "end": 2367
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2371,
                    "end": 2376
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2378,
                    "end": 2388
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2371,
                  "end": 2388
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2390,
                    "end": 2398
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2400,
                    "end": 2405
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2390,
                  "end": 2405
                }
              ],
              "start": 2369,
              "end": 2407
            }
          ],
          "optional": false,
          "start": 2332,
          "end": 2408
        },
        "start": 2326,
        "end": 2408
      },
      "directive": null,
      "start": 2326,
      "end": 2409
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
            "name": "float64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2436,
            "end": 2448
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2455,
              "end": 2467
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2468,
                "end": 2469
              }
            ],
            "start": 2451,
            "end": 2470
          },
          "definite": false,
          "start": 2436,
          "end": 2470
        }
      ],
      "declare": false,
      "start": 2430,
      "end": 2471
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2472,
          "end": 2475
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2478,
              "end": 2490
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2491,
              "end": 2505
            },
            "optional": false,
            "computed": false,
            "start": 2478,
            "end": 2505
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2478,
          "end": 2507
        },
        "start": 2472,
        "end": 2507
      },
      "directive": null,
      "start": 2472,
      "end": 2508
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2515,
          "end": 2518
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2521,
              "end": 2533
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2534,
              "end": 2548
            },
            "optional": false,
            "computed": false,
            "start": 2521,
            "end": 2548
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2549,
              "end": 2556
            }
          ],
          "optional": false,
          "start": 2521,
          "end": 2557
        },
        "start": 2515,
        "end": 2557
      },
      "directive": null,
      "start": 2515,
      "end": 2558
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2578,
          "end": 2581
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2584,
              "end": 2596
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2597,
              "end": 2611
            },
            "optional": false,
            "computed": false,
            "start": 2584,
            "end": 2611
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2612,
              "end": 2619
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2623,
                    "end": 2628
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2630,
                    "end": 2640
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2623,
                  "end": 2640
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2642,
                    "end": 2650
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2652,
                    "end": 2657
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2642,
                  "end": 2657
                }
              ],
              "start": 2621,
              "end": 2659
            }
          ],
          "optional": false,
          "start": 2584,
          "end": 2660
        },
        "start": 2578,
        "end": 2660
      },
      "directive": null,
      "start": 2578,
      "end": 2661
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2680
}
```
