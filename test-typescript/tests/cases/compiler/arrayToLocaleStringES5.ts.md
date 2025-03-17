__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2681,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "name": "str",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              }
            },
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
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 29,
            "end": 38,
            "elements": [
              {
                "type": "Literal",
                "start": 30,
                "end": 31,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 36,
                "end": 37,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 67,
      "expression": {
        "type": "AssignmentExpression",
        "start": 40,
        "end": 66,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 40,
          "end": 43,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 46,
          "end": 66,
          "callee": {
            "type": "MemberExpression",
            "start": 46,
            "end": 64,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "name": "arr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 50,
              "end": 64,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 108,
      "expression": {
        "type": "AssignmentExpression",
        "start": 74,
        "end": 107,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 74,
          "end": 77,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 80,
          "end": 107,
          "callee": {
            "type": "MemberExpression",
            "start": 80,
            "end": 98,
            "object": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "name": "arr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 98,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 99,
              "end": 106,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 202,
      "expression": {
        "type": "AssignmentExpression",
        "start": 128,
        "end": 201,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 128,
          "end": 131,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 134,
          "end": 201,
          "callee": {
            "type": "MemberExpression",
            "start": 134,
            "end": 152,
            "object": {
              "type": "Identifier",
              "start": 134,
              "end": 137,
              "name": "arr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 138,
              "end": 152,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 153,
              "end": 160,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 162,
              "end": 200,
              "properties": [
                {
                  "type": "Property",
                  "start": 164,
                  "end": 181,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 169,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 171,
                    "end": 181,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 183,
                  "end": 198,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 191,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 193,
                    "end": 198,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 251,
            "name": "dates",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 236,
                "end": 251,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 245,
                  "end": 251,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 245,
                    "end": 249,
                    "typeName": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 249,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 254,
            "end": 278,
            "elements": [
              {
                "type": "NewExpression",
                "start": 255,
                "end": 265,
                "callee": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 263,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 267,
                "end": 277,
                "callee": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 275,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 309,
      "expression": {
        "type": "AssignmentExpression",
        "start": 280,
        "end": 308,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 280,
          "end": 283,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 286,
          "end": 308,
          "callee": {
            "type": "MemberExpression",
            "start": 286,
            "end": 306,
            "object": {
              "type": "Identifier",
              "start": 286,
              "end": 291,
              "name": "dates",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 292,
              "end": 306,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 349,
      "expression": {
        "type": "AssignmentExpression",
        "start": 316,
        "end": 348,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 316,
          "end": 319,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 322,
          "end": 348,
          "callee": {
            "type": "MemberExpression",
            "start": 322,
            "end": 342,
            "object": {
              "type": "Identifier",
              "start": 322,
              "end": 327,
              "name": "dates",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 328,
              "end": 342,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 343,
              "end": 347,
              "value": "fr",
              "raw": "'fr'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 423,
      "expression": {
        "type": "AssignmentExpression",
        "start": 369,
        "end": 422,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 369,
          "end": 372,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 375,
          "end": 422,
          "callee": {
            "type": "MemberExpression",
            "start": 375,
            "end": 395,
            "object": {
              "type": "Identifier",
              "start": 375,
              "end": 380,
              "name": "dates",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 381,
              "end": 395,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 396,
              "end": 400,
              "value": "fr",
              "raw": "'fr'"
            },
            {
              "type": "ObjectExpression",
              "start": 402,
              "end": 421,
              "properties": [
                {
                  "type": "Property",
                  "start": 404,
                  "end": 419,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 412,
                    "name": "timeZone",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 414,
                    "end": 419,
                    "value": "UTC",
                    "raw": "'UTC'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 444,
      "end": 479,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 450,
          "end": 478,
          "id": {
            "type": "Identifier",
            "start": 450,
            "end": 459,
            "name": "int8Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 462,
            "end": 478,
            "callee": {
              "type": "Identifier",
              "start": 466,
              "end": 475,
              "name": "Int8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 476,
                "end": 477,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 480,
      "end": 513,
      "expression": {
        "type": "AssignmentExpression",
        "start": 480,
        "end": 512,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 480,
          "end": 483,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 486,
          "end": 512,
          "callee": {
            "type": "MemberExpression",
            "start": 486,
            "end": 510,
            "object": {
              "type": "Identifier",
              "start": 486,
              "end": 495,
              "name": "int8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 496,
              "end": 510,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 520,
      "end": 560,
      "expression": {
        "type": "AssignmentExpression",
        "start": 520,
        "end": 559,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 520,
          "end": 523,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 526,
          "end": 559,
          "callee": {
            "type": "MemberExpression",
            "start": 526,
            "end": 550,
            "object": {
              "type": "Identifier",
              "start": 526,
              "end": 535,
              "name": "int8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 536,
              "end": 550,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 551,
              "end": 558,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 580,
      "end": 660,
      "expression": {
        "type": "AssignmentExpression",
        "start": 580,
        "end": 659,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 580,
          "end": 583,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 586,
          "end": 659,
          "callee": {
            "type": "MemberExpression",
            "start": 586,
            "end": 610,
            "object": {
              "type": "Identifier",
              "start": 586,
              "end": 595,
              "name": "int8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 596,
              "end": 610,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 611,
              "end": 618,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 620,
              "end": 658,
              "properties": [
                {
                  "type": "Property",
                  "start": 622,
                  "end": 639,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 622,
                    "end": 627,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 629,
                    "end": 639,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 641,
                  "end": 656,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 641,
                    "end": 649,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 651,
                    "end": 656,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 681,
      "end": 718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 687,
          "end": 717,
          "id": {
            "type": "Identifier",
            "start": 687,
            "end": 697,
            "name": "uint8Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 700,
            "end": 717,
            "callee": {
              "type": "Identifier",
              "start": 704,
              "end": 714,
              "name": "Uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 715,
                "end": 716,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 719,
      "end": 753,
      "expression": {
        "type": "AssignmentExpression",
        "start": 719,
        "end": 752,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 719,
          "end": 722,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 725,
          "end": 752,
          "callee": {
            "type": "MemberExpression",
            "start": 725,
            "end": 750,
            "object": {
              "type": "Identifier",
              "start": 725,
              "end": 735,
              "name": "uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 736,
              "end": 750,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 760,
      "end": 801,
      "expression": {
        "type": "AssignmentExpression",
        "start": 760,
        "end": 800,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 760,
          "end": 763,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 766,
          "end": 800,
          "callee": {
            "type": "MemberExpression",
            "start": 766,
            "end": 791,
            "object": {
              "type": "Identifier",
              "start": 766,
              "end": 776,
              "name": "uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 777,
              "end": 791,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 792,
              "end": 799,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 821,
      "end": 902,
      "expression": {
        "type": "AssignmentExpression",
        "start": 821,
        "end": 901,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 821,
          "end": 824,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 827,
          "end": 901,
          "callee": {
            "type": "MemberExpression",
            "start": 827,
            "end": 852,
            "object": {
              "type": "Identifier",
              "start": 827,
              "end": 837,
              "name": "uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 838,
              "end": 852,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 853,
              "end": 860,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 862,
              "end": 900,
              "properties": [
                {
                  "type": "Property",
                  "start": 864,
                  "end": 881,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 864,
                    "end": 869,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 871,
                    "end": 881,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 883,
                  "end": 898,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 891,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 893,
                    "end": 898,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 923,
      "end": 974,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 929,
          "end": 973,
          "id": {
            "type": "Identifier",
            "start": 929,
            "end": 946,
            "name": "uint8ClampedArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 949,
            "end": 973,
            "callee": {
              "type": "Identifier",
              "start": 953,
              "end": 970,
              "name": "Uint8ClampedArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 971,
                "end": 972,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 975,
      "end": 1016,
      "expression": {
        "type": "AssignmentExpression",
        "start": 975,
        "end": 1015,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 975,
          "end": 978,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 981,
          "end": 1015,
          "callee": {
            "type": "MemberExpression",
            "start": 981,
            "end": 1013,
            "object": {
              "type": "Identifier",
              "start": 981,
              "end": 998,
              "name": "uint8ClampedArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 999,
              "end": 1013,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1023,
      "end": 1071,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1023,
        "end": 1070,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1023,
          "end": 1026,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1029,
          "end": 1070,
          "callee": {
            "type": "MemberExpression",
            "start": 1029,
            "end": 1061,
            "object": {
              "type": "Identifier",
              "start": 1029,
              "end": 1046,
              "name": "uint8ClampedArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1047,
              "end": 1061,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 1062,
              "end": 1069,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1091,
      "end": 1179,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1091,
        "end": 1178,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1091,
          "end": 1094,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1097,
          "end": 1178,
          "callee": {
            "type": "MemberExpression",
            "start": 1097,
            "end": 1129,
            "object": {
              "type": "Identifier",
              "start": 1097,
              "end": 1114,
              "name": "uint8ClampedArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1115,
              "end": 1129,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 1130,
              "end": 1137,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1139,
              "end": 1177,
              "properties": [
                {
                  "type": "Property",
                  "start": 1141,
                  "end": 1158,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1141,
                    "end": 1146,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1148,
                    "end": 1158,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1160,
                  "end": 1175,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1160,
                    "end": 1168,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1170,
                    "end": 1175,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1200,
      "end": 1237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1206,
          "end": 1236,
          "id": {
            "type": "Identifier",
            "start": 1206,
            "end": 1216,
            "name": "int16Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1219,
            "end": 1236,
            "callee": {
              "type": "Identifier",
              "start": 1223,
              "end": 1233,
              "name": "Int16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1234,
                "end": 1235,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1238,
      "end": 1272,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1238,
        "end": 1271,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1238,
          "end": 1241,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1244,
          "end": 1271,
          "callee": {
            "type": "MemberExpression",
            "start": 1244,
            "end": 1269,
            "object": {
              "type": "Identifier",
              "start": 1244,
              "end": 1254,
              "name": "int16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1255,
              "end": 1269,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1279,
      "end": 1320,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1279,
        "end": 1319,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1279,
          "end": 1282,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1285,
          "end": 1319,
          "callee": {
            "type": "MemberExpression",
            "start": 1285,
            "end": 1310,
            "object": {
              "type": "Identifier",
              "start": 1285,
              "end": 1295,
              "name": "int16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1296,
              "end": 1310,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 1311,
              "end": 1318,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1340,
      "end": 1421,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1340,
        "end": 1420,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1340,
          "end": 1343,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1346,
          "end": 1420,
          "callee": {
            "type": "MemberExpression",
            "start": 1346,
            "end": 1371,
            "object": {
              "type": "Identifier",
              "start": 1346,
              "end": 1356,
              "name": "int16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1357,
              "end": 1371,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 1372,
              "end": 1379,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1381,
              "end": 1419,
              "properties": [
                {
                  "type": "Property",
                  "start": 1383,
                  "end": 1400,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1383,
                    "end": 1388,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1390,
                    "end": 1400,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1402,
                  "end": 1417,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1402,
                    "end": 1410,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1412,
                    "end": 1417,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1442,
      "end": 1481,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1448,
          "end": 1480,
          "id": {
            "type": "Identifier",
            "start": 1448,
            "end": 1459,
            "name": "uint16Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1462,
            "end": 1480,
            "callee": {
              "type": "Identifier",
              "start": 1466,
              "end": 1477,
              "name": "Uint16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1478,
                "end": 1479,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1482,
      "end": 1517,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1482,
        "end": 1516,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1482,
          "end": 1485,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1488,
          "end": 1516,
          "callee": {
            "type": "MemberExpression",
            "start": 1488,
            "end": 1514,
            "object": {
              "type": "Identifier",
              "start": 1488,
              "end": 1499,
              "name": "uint16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1500,
              "end": 1514,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1524,
      "end": 1566,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1524,
        "end": 1565,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1524,
          "end": 1527,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1530,
          "end": 1565,
          "callee": {
            "type": "MemberExpression",
            "start": 1530,
            "end": 1556,
            "object": {
              "type": "Identifier",
              "start": 1530,
              "end": 1541,
              "name": "uint16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1542,
              "end": 1556,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 1557,
              "end": 1564,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1586,
      "end": 1668,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1586,
        "end": 1667,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1586,
          "end": 1589,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1592,
          "end": 1667,
          "callee": {
            "type": "MemberExpression",
            "start": 1592,
            "end": 1618,
            "object": {
              "type": "Identifier",
              "start": 1592,
              "end": 1603,
              "name": "uint16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1604,
              "end": 1618,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 1619,
              "end": 1626,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1628,
              "end": 1666,
              "properties": [
                {
                  "type": "Property",
                  "start": 1630,
                  "end": 1647,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1630,
                    "end": 1635,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1637,
                    "end": 1647,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1649,
                  "end": 1664,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1649,
                    "end": 1657,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1659,
                    "end": 1664,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1689,
      "end": 1726,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1695,
          "end": 1725,
          "id": {
            "type": "Identifier",
            "start": 1695,
            "end": 1705,
            "name": "int32Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1708,
            "end": 1725,
            "callee": {
              "type": "Identifier",
              "start": 1712,
              "end": 1722,
              "name": "Int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1723,
                "end": 1724,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1727,
      "end": 1761,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1727,
        "end": 1760,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1727,
          "end": 1730,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1733,
          "end": 1760,
          "callee": {
            "type": "MemberExpression",
            "start": 1733,
            "end": 1758,
            "object": {
              "type": "Identifier",
              "start": 1733,
              "end": 1743,
              "name": "int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1744,
              "end": 1758,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1768,
      "end": 1809,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1768,
        "end": 1808,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1768,
          "end": 1771,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1774,
          "end": 1808,
          "callee": {
            "type": "MemberExpression",
            "start": 1774,
            "end": 1799,
            "object": {
              "type": "Identifier",
              "start": 1774,
              "end": 1784,
              "name": "int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1785,
              "end": 1799,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 1800,
              "end": 1807,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1829,
      "end": 1910,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1829,
        "end": 1909,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1829,
          "end": 1832,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1835,
          "end": 1909,
          "callee": {
            "type": "MemberExpression",
            "start": 1835,
            "end": 1860,
            "object": {
              "type": "Identifier",
              "start": 1835,
              "end": 1845,
              "name": "int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1846,
              "end": 1860,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 1861,
              "end": 1868,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1870,
              "end": 1908,
              "properties": [
                {
                  "type": "Property",
                  "start": 1872,
                  "end": 1889,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1872,
                    "end": 1877,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1879,
                    "end": 1889,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1891,
                  "end": 1906,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1891,
                    "end": 1899,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1901,
                    "end": 1906,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1931,
      "end": 1970,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1937,
          "end": 1969,
          "id": {
            "type": "Identifier",
            "start": 1937,
            "end": 1948,
            "name": "uint32Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1951,
            "end": 1969,
            "callee": {
              "type": "Identifier",
              "start": 1955,
              "end": 1966,
              "name": "Uint32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1967,
                "end": 1968,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1971,
      "end": 2006,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1971,
        "end": 2005,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1971,
          "end": 1974,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1977,
          "end": 2005,
          "callee": {
            "type": "MemberExpression",
            "start": 1977,
            "end": 2003,
            "object": {
              "type": "Identifier",
              "start": 1977,
              "end": 1988,
              "name": "uint32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1989,
              "end": 2003,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2013,
      "end": 2055,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2013,
        "end": 2054,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2013,
          "end": 2016,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2019,
          "end": 2054,
          "callee": {
            "type": "MemberExpression",
            "start": 2019,
            "end": 2045,
            "object": {
              "type": "Identifier",
              "start": 2019,
              "end": 2030,
              "name": "uint32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2031,
              "end": 2045,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 2046,
              "end": 2053,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2075,
      "end": 2157,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2075,
        "end": 2156,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2075,
          "end": 2078,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2081,
          "end": 2156,
          "callee": {
            "type": "MemberExpression",
            "start": 2081,
            "end": 2107,
            "object": {
              "type": "Identifier",
              "start": 2081,
              "end": 2092,
              "name": "uint32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2093,
              "end": 2107,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 2108,
              "end": 2115,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 2117,
              "end": 2155,
              "properties": [
                {
                  "type": "Property",
                  "start": 2119,
                  "end": 2136,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2119,
                    "end": 2124,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2126,
                    "end": 2136,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2138,
                  "end": 2153,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2138,
                    "end": 2146,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2148,
                    "end": 2153,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2178,
      "end": 2219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2184,
          "end": 2218,
          "id": {
            "type": "Identifier",
            "start": 2184,
            "end": 2196,
            "name": "float32Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2199,
            "end": 2218,
            "callee": {
              "type": "Identifier",
              "start": 2203,
              "end": 2215,
              "name": "Float32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2216,
                "end": 2217,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2220,
      "end": 2256,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2220,
        "end": 2255,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2220,
          "end": 2223,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2226,
          "end": 2255,
          "callee": {
            "type": "MemberExpression",
            "start": 2226,
            "end": 2253,
            "object": {
              "type": "Identifier",
              "start": 2226,
              "end": 2238,
              "name": "float32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2239,
              "end": 2253,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2263,
      "end": 2306,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2263,
        "end": 2305,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2263,
          "end": 2266,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2269,
          "end": 2305,
          "callee": {
            "type": "MemberExpression",
            "start": 2269,
            "end": 2296,
            "object": {
              "type": "Identifier",
              "start": 2269,
              "end": 2281,
              "name": "float32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2282,
              "end": 2296,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 2297,
              "end": 2304,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2326,
      "end": 2409,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2326,
        "end": 2408,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2326,
          "end": 2329,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2332,
          "end": 2408,
          "callee": {
            "type": "MemberExpression",
            "start": 2332,
            "end": 2359,
            "object": {
              "type": "Identifier",
              "start": 2332,
              "end": 2344,
              "name": "float32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2345,
              "end": 2359,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 2360,
              "end": 2367,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 2369,
              "end": 2407,
              "properties": [
                {
                  "type": "Property",
                  "start": 2371,
                  "end": 2388,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2371,
                    "end": 2376,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2378,
                    "end": 2388,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2390,
                  "end": 2405,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2390,
                    "end": 2398,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2400,
                    "end": 2405,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2430,
      "end": 2471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2436,
          "end": 2470,
          "id": {
            "type": "Identifier",
            "start": 2436,
            "end": 2448,
            "name": "float64Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2451,
            "end": 2470,
            "callee": {
              "type": "Identifier",
              "start": 2455,
              "end": 2467,
              "name": "Float64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2468,
                "end": 2469,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2472,
      "end": 2508,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2472,
        "end": 2507,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2472,
          "end": 2475,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2478,
          "end": 2507,
          "callee": {
            "type": "MemberExpression",
            "start": 2478,
            "end": 2505,
            "object": {
              "type": "Identifier",
              "start": 2478,
              "end": 2490,
              "name": "float64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2491,
              "end": 2505,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2515,
      "end": 2558,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2515,
        "end": 2557,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2515,
          "end": 2518,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2521,
          "end": 2557,
          "callee": {
            "type": "MemberExpression",
            "start": 2521,
            "end": 2548,
            "object": {
              "type": "Identifier",
              "start": 2521,
              "end": 2533,
              "name": "float64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2534,
              "end": 2548,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 2549,
              "end": 2556,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2578,
      "end": 2661,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2578,
        "end": 2660,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2578,
          "end": 2581,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2584,
          "end": 2660,
          "callee": {
            "type": "MemberExpression",
            "start": 2584,
            "end": 2611,
            "object": {
              "type": "Identifier",
              "start": 2584,
              "end": 2596,
              "name": "float64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2597,
              "end": 2611,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 2612,
              "end": 2619,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 2621,
              "end": 2659,
              "properties": [
                {
                  "type": "Property",
                  "start": 2623,
                  "end": 2640,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2623,
                    "end": 2628,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2630,
                    "end": 2640,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2642,
                  "end": 2657,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2642,
                    "end": 2650,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2652,
                    "end": 2657,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
