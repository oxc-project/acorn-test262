__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 725,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 18,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 18,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ClassDeclaration",
      "start": 19,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 73,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 50,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 71,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 71,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 74,
      "end": 92,
      "body": {
        "type": "TSEnumBody",
        "start": 81,
        "end": 92,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 83,
            "end": 84,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 86,
            "end": 87,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 89,
            "end": 90,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 93,
      "end": 118,
      "body": {
        "type": "TSModuleBlock",
        "start": 102,
        "end": 118,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 104,
            "end": 116,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 111,
              "end": 116,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 115,
                  "end": 116,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 130,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 130,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 127,
                "end": 130
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 146,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 146,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 139,
                "end": 146
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 161,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 161,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 155,
                "end": 161
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 176,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 170,
                "end": 176
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 191,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 191,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 191,
                "typeName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 191,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 265,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 268,
            "end": 273,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 289,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 281,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 284,
            "end": 289,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 291,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 297,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 300,
            "end": 305,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 300,
              "end": 301,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 321,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 313,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 316,
            "end": 321,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 320,
              "end": 321,
              "decorators": [],
              "name": "d",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 323,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 329,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 332,
            "end": 337,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
              "decorators": [],
              "name": "e",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 406,
      "end": 421,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 410,
          "end": 420,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 410,
            "end": 412,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 415,
            "end": 420,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 419,
              "end": 420,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 422,
      "end": 437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 436,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 428,
            "decorators": [],
            "name": "r7",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 431,
            "end": 436,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 438,
      "end": 453,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 452,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 444,
            "decorators": [],
            "name": "r8",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 447,
            "end": 452,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 447,
              "end": 448,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 451,
              "end": 452,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 454,
      "end": 469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 458,
          "end": 468,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 458,
            "end": 460,
            "decorators": [],
            "name": "r9",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 463,
            "end": 468,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 486,
      "end": 504,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 503,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 493,
            "decorators": [],
            "name": "r10",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 496,
            "end": 503,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 496,
              "end": 497,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 500,
              "end": 503,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 505,
      "end": 525,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 509,
          "end": 524,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 512,
            "decorators": [],
            "name": "r11",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 515,
            "end": 524,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 515,
              "end": 516,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 519,
              "end": 524,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 519,
                "end": 522,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 526,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 541,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 533,
            "decorators": [],
            "name": "r12",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 536,
            "end": 541,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 536,
              "end": 537,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 540,
              "end": 541,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 565,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 564,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 550,
            "decorators": [],
            "name": "r13",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 553,
            "end": 564,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 553,
              "end": 554,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "NewExpression",
              "start": 557,
              "end": 564,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 561,
                "end": 562,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 566,
      "end": 582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 581,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 573,
            "decorators": [],
            "name": "r14",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 576,
            "end": 581,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 576,
              "end": 577,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 580,
              "end": 581,
              "decorators": [],
              "name": "E",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 583,
      "end": 601,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 587,
          "end": 600,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 587,
            "end": 590,
            "decorators": [],
            "name": "r15",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 593,
            "end": 600,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 593,
              "end": 594,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 597,
              "end": 600,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 597,
                "end": 598,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 599,
                "end": 600,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 602,
      "end": 618,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 606,
          "end": 617,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 609,
            "decorators": [],
            "name": "r16",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 612,
            "end": 617,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
              "decorators": [],
              "name": "M",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 619,
      "end": 636,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 623,
          "end": 635,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 623,
            "end": 626,
            "decorators": [],
            "name": "r17",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 629,
            "end": 635,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 629,
              "end": 630,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 633,
              "end": 635,
              "raw": "''",
              "value": ""
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 637,
      "end": 655,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 641,
          "end": 654,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 641,
            "end": 644,
            "decorators": [],
            "name": "r18",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 647,
            "end": 654,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 651,
              "end": 654,
              "raw": "123",
              "value": 123
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 656,
      "end": 680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 660,
          "end": 679,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 660,
            "end": 663,
            "decorators": [],
            "name": "r19",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 666,
            "end": 679,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 666,
              "end": 667,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "ObjectExpression",
              "start": 670,
              "end": 679,
              "properties": [
                {
                  "type": "Property",
                  "start": 672,
                  "end": 677,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 672,
                    "end": 673,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 675,
                    "end": 677,
                    "raw": "''",
                    "value": ""
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 681,
      "end": 725,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 685,
          "end": 724,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 685,
            "end": 688,
            "decorators": [],
            "name": "r20",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 691,
            "end": 724,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 691,
              "end": 692,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 696,
              "end": 723,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 711,
                "end": 723,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 713,
                    "end": 721,
                    "argument": {
                      "type": "Identifier",
                      "start": 720,
                      "end": 721,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 697,
                  "end": 706,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 698,
                    "end": 706,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 700,
                      "end": 706
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
