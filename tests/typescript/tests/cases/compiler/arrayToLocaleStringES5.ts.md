__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2680,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 36,
                "end": 37,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 67,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 40,
        "end": 66,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 40,
          "end": 43,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 46,
          "end": 66,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 46,
            "end": 64,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 50,
              "end": 64,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 108,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 74,
        "end": 107,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 74,
          "end": 77,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 80,
          "end": 107,
          "arguments": [
            {
              "type": "Literal",
              "start": 99,
              "end": 106,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 80,
            "end": 98,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 98,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 202,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 128,
        "end": 201,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 128,
          "end": 131,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 134,
          "end": 201,
          "arguments": [
            {
              "type": "Literal",
              "start": 153,
              "end": 160,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 169,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 171,
                    "end": 181,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 183,
                  "end": 198,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 191,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 193,
                    "end": 198,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 134,
            "end": 152,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 134,
              "end": 137,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 138,
              "end": 152,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 251,
            "decorators": [],
            "name": "dates",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 249,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            }
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
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 263,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 267,
                "end": 277,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 275,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 309,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 280,
        "end": 308,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 280,
          "end": 283,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 286,
          "end": 308,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 286,
            "end": 306,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 286,
              "end": 291,
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 292,
              "end": 306,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 349,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 316,
        "end": 348,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 316,
          "end": 319,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 322,
          "end": 348,
          "arguments": [
            {
              "type": "Literal",
              "start": 343,
              "end": 347,
              "raw": "'fr'",
              "value": "fr"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 322,
            "end": 342,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 322,
              "end": 327,
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 328,
              "end": 342,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 423,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 369,
        "end": 422,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 369,
          "end": 372,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 375,
          "end": 422,
          "arguments": [
            {
              "type": "Literal",
              "start": 396,
              "end": 400,
              "raw": "'fr'",
              "value": "fr"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 412,
                    "decorators": [],
                    "name": "timeZone",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 414,
                    "end": 419,
                    "raw": "'UTC'",
                    "value": "UTC"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 375,
            "end": 395,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 375,
              "end": 380,
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 381,
              "end": 395,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 450,
            "end": 459,
            "decorators": [],
            "name": "int8Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 462,
            "end": 478,
            "arguments": [
              {
                "type": "Literal",
                "start": 476,
                "end": 477,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 466,
              "end": 475,
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 480,
      "end": 513,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 480,
        "end": 512,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 480,
          "end": 483,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 486,
          "end": 512,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 486,
            "end": 510,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 486,
              "end": 495,
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 496,
              "end": 510,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 520,
      "end": 560,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 520,
        "end": 559,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 520,
          "end": 523,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 526,
          "end": 559,
          "arguments": [
            {
              "type": "Literal",
              "start": 551,
              "end": 558,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 526,
            "end": 550,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 526,
              "end": 535,
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 536,
              "end": 550,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 580,
      "end": 660,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 580,
        "end": 659,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 580,
          "end": 583,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 586,
          "end": 659,
          "arguments": [
            {
              "type": "Literal",
              "start": 611,
              "end": 618,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 622,
                    "end": 627,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 629,
                    "end": 639,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 641,
                  "end": 656,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 641,
                    "end": 649,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 651,
                    "end": 656,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 586,
            "end": 610,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 586,
              "end": 595,
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 596,
              "end": 610,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 687,
            "end": 697,
            "decorators": [],
            "name": "uint8Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 700,
            "end": 717,
            "arguments": [
              {
                "type": "Literal",
                "start": 715,
                "end": 716,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 704,
              "end": 714,
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 719,
      "end": 753,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 719,
        "end": 752,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 719,
          "end": 722,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 725,
          "end": 752,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 725,
            "end": 750,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 725,
              "end": 735,
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 736,
              "end": 750,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 760,
      "end": 801,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 760,
        "end": 800,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 760,
          "end": 763,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 766,
          "end": 800,
          "arguments": [
            {
              "type": "Literal",
              "start": 792,
              "end": 799,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 766,
            "end": 791,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 766,
              "end": 776,
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 777,
              "end": 791,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 821,
      "end": 902,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 821,
        "end": 901,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 821,
          "end": 824,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 827,
          "end": 901,
          "arguments": [
            {
              "type": "Literal",
              "start": 853,
              "end": 860,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 864,
                    "end": 869,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 871,
                    "end": 881,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 883,
                  "end": 898,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 891,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 893,
                    "end": 898,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 827,
            "end": 852,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 827,
              "end": 837,
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 838,
              "end": 852,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 929,
            "end": 946,
            "decorators": [],
            "name": "uint8ClampedArray",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 949,
            "end": 973,
            "arguments": [
              {
                "type": "Literal",
                "start": 971,
                "end": 972,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 953,
              "end": 970,
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 975,
      "end": 1016,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 975,
        "end": 1015,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 975,
          "end": 978,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 981,
          "end": 1015,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 981,
            "end": 1013,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 981,
              "end": 998,
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 999,
              "end": 1013,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1023,
      "end": 1071,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1023,
        "end": 1070,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1023,
          "end": 1026,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1029,
          "end": 1070,
          "arguments": [
            {
              "type": "Literal",
              "start": 1062,
              "end": 1069,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1029,
            "end": 1061,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1029,
              "end": 1046,
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1047,
              "end": 1061,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1091,
      "end": 1179,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1091,
        "end": 1178,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1091,
          "end": 1094,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1097,
          "end": 1178,
          "arguments": [
            {
              "type": "Literal",
              "start": 1130,
              "end": 1137,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1141,
                    "end": 1146,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1148,
                    "end": 1158,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1160,
                  "end": 1175,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1160,
                    "end": 1168,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1170,
                    "end": 1175,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1097,
            "end": 1129,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1097,
              "end": 1114,
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1115,
              "end": 1129,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1206,
            "end": 1216,
            "decorators": [],
            "name": "int16Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1219,
            "end": 1236,
            "arguments": [
              {
                "type": "Literal",
                "start": 1234,
                "end": 1235,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1223,
              "end": 1233,
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1238,
      "end": 1272,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1238,
        "end": 1271,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1238,
          "end": 1241,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1244,
          "end": 1271,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1244,
            "end": 1269,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1244,
              "end": 1254,
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1255,
              "end": 1269,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1279,
      "end": 1320,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1279,
        "end": 1319,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1279,
          "end": 1282,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1285,
          "end": 1319,
          "arguments": [
            {
              "type": "Literal",
              "start": 1311,
              "end": 1318,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1285,
            "end": 1310,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1285,
              "end": 1295,
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1296,
              "end": 1310,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1340,
      "end": 1421,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1340,
        "end": 1420,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1340,
          "end": 1343,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1346,
          "end": 1420,
          "arguments": [
            {
              "type": "Literal",
              "start": 1372,
              "end": 1379,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1383,
                    "end": 1388,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1390,
                    "end": 1400,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1402,
                  "end": 1417,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1402,
                    "end": 1410,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1412,
                    "end": 1417,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1346,
            "end": 1371,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1346,
              "end": 1356,
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1357,
              "end": 1371,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1448,
            "end": 1459,
            "decorators": [],
            "name": "uint16Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1462,
            "end": 1480,
            "arguments": [
              {
                "type": "Literal",
                "start": 1478,
                "end": 1479,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1466,
              "end": 1477,
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1482,
      "end": 1517,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1482,
        "end": 1516,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1482,
          "end": 1485,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1488,
          "end": 1516,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1488,
            "end": 1514,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1488,
              "end": 1499,
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1500,
              "end": 1514,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1524,
      "end": 1566,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1524,
        "end": 1565,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1524,
          "end": 1527,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1530,
          "end": 1565,
          "arguments": [
            {
              "type": "Literal",
              "start": 1557,
              "end": 1564,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1530,
            "end": 1556,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1530,
              "end": 1541,
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1542,
              "end": 1556,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1586,
      "end": 1668,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1586,
        "end": 1667,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1586,
          "end": 1589,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1592,
          "end": 1667,
          "arguments": [
            {
              "type": "Literal",
              "start": 1619,
              "end": 1626,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1630,
                    "end": 1635,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1637,
                    "end": 1647,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1649,
                  "end": 1664,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1649,
                    "end": 1657,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1659,
                    "end": 1664,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1592,
            "end": 1618,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1592,
              "end": 1603,
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1604,
              "end": 1618,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1695,
            "end": 1705,
            "decorators": [],
            "name": "int32Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1708,
            "end": 1725,
            "arguments": [
              {
                "type": "Literal",
                "start": 1723,
                "end": 1724,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1712,
              "end": 1722,
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1727,
      "end": 1761,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1727,
        "end": 1760,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1727,
          "end": 1730,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1733,
          "end": 1760,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1733,
            "end": 1758,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1733,
              "end": 1743,
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1744,
              "end": 1758,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1768,
      "end": 1809,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1768,
        "end": 1808,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1768,
          "end": 1771,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1774,
          "end": 1808,
          "arguments": [
            {
              "type": "Literal",
              "start": 1800,
              "end": 1807,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1774,
            "end": 1799,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1774,
              "end": 1784,
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1785,
              "end": 1799,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1829,
      "end": 1910,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1829,
        "end": 1909,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1829,
          "end": 1832,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1835,
          "end": 1909,
          "arguments": [
            {
              "type": "Literal",
              "start": 1861,
              "end": 1868,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1872,
                    "end": 1877,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1879,
                    "end": 1889,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1891,
                  "end": 1906,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1891,
                    "end": 1899,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1901,
                    "end": 1906,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1835,
            "end": 1860,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1835,
              "end": 1845,
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1846,
              "end": 1860,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1937,
            "end": 1948,
            "decorators": [],
            "name": "uint32Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1951,
            "end": 1969,
            "arguments": [
              {
                "type": "Literal",
                "start": 1967,
                "end": 1968,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1955,
              "end": 1966,
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1971,
      "end": 2006,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1971,
        "end": 2005,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1971,
          "end": 1974,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1977,
          "end": 2005,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1977,
            "end": 2003,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1977,
              "end": 1988,
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1989,
              "end": 2003,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2013,
      "end": 2055,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2013,
        "end": 2054,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2013,
          "end": 2016,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2019,
          "end": 2054,
          "arguments": [
            {
              "type": "Literal",
              "start": 2046,
              "end": 2053,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2019,
            "end": 2045,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2019,
              "end": 2030,
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2031,
              "end": 2045,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2075,
      "end": 2157,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2075,
        "end": 2156,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2075,
          "end": 2078,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2081,
          "end": 2156,
          "arguments": [
            {
              "type": "Literal",
              "start": 2108,
              "end": 2115,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2119,
                    "end": 2124,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2126,
                    "end": 2136,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 2138,
                  "end": 2153,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2138,
                    "end": 2146,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2148,
                    "end": 2153,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2081,
            "end": 2107,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2081,
              "end": 2092,
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2093,
              "end": 2107,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2184,
            "end": 2196,
            "decorators": [],
            "name": "float32Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2199,
            "end": 2218,
            "arguments": [
              {
                "type": "Literal",
                "start": 2216,
                "end": 2217,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2203,
              "end": 2215,
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 2220,
      "end": 2256,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2220,
        "end": 2255,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2220,
          "end": 2223,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2226,
          "end": 2255,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 2226,
            "end": 2253,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2226,
              "end": 2238,
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2239,
              "end": 2253,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2263,
      "end": 2306,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2263,
        "end": 2305,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2263,
          "end": 2266,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2269,
          "end": 2305,
          "arguments": [
            {
              "type": "Literal",
              "start": 2297,
              "end": 2304,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2269,
            "end": 2296,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2269,
              "end": 2281,
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2282,
              "end": 2296,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2326,
      "end": 2409,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2326,
        "end": 2408,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2326,
          "end": 2329,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2332,
          "end": 2408,
          "arguments": [
            {
              "type": "Literal",
              "start": 2360,
              "end": 2367,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2371,
                    "end": 2376,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2378,
                    "end": 2388,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 2390,
                  "end": 2405,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2390,
                    "end": 2398,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2400,
                    "end": 2405,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2332,
            "end": 2359,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2332,
              "end": 2344,
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2345,
              "end": 2359,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2436,
            "end": 2448,
            "decorators": [],
            "name": "float64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2451,
            "end": 2470,
            "arguments": [
              {
                "type": "Literal",
                "start": 2468,
                "end": 2469,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2455,
              "end": 2467,
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 2472,
      "end": 2508,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2472,
        "end": 2507,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2472,
          "end": 2475,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2478,
          "end": 2507,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 2478,
            "end": 2505,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2478,
              "end": 2490,
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2491,
              "end": 2505,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2515,
      "end": 2558,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2515,
        "end": 2557,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2515,
          "end": 2518,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2521,
          "end": 2557,
          "arguments": [
            {
              "type": "Literal",
              "start": 2549,
              "end": 2556,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2521,
            "end": 2548,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2521,
              "end": 2533,
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2534,
              "end": 2548,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2578,
      "end": 2661,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2578,
        "end": 2660,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2578,
          "end": 2581,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2584,
          "end": 2660,
          "arguments": [
            {
              "type": "Literal",
              "start": 2612,
              "end": 2619,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2623,
                    "end": 2628,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2630,
                    "end": 2640,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 2642,
                  "end": 2657,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2642,
                    "end": 2650,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2652,
                    "end": 2657,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2584,
            "end": 2611,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2584,
              "end": 2596,
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2597,
              "end": 2611,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
