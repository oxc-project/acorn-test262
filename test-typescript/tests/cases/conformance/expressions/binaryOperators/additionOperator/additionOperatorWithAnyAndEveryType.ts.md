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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
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
        "start": 15,
        "end": 18,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 19,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 73,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 50,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 71,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 71,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 71,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 74,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 83,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 86,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 89,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 81,
        "end": 92,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 83,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 86,
            "end": 87,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 89,
            "end": 90,
            "id": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 93,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 102,
        "end": 118,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 104,
            "end": 116,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 111,
              "end": 116,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 115,
                  "end": 116,
                  "id": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 130,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 130,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 127,
                "end": 130
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 146,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 146,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 139,
                "end": 146
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 161,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 161,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 155,
                "end": 161
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 176,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 170,
                "end": 176
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 191,
            "name": "e",
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
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 265,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 268,
            "end": 273,
            "left": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 281,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 284,
            "end": 289,
            "left": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 297,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 300,
            "end": 305,
            "left": {
              "type": "Identifier",
              "start": 300,
              "end": 301,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 313,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 316,
            "end": 321,
            "left": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 320,
              "end": 321,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 329,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 332,
            "end": 337,
            "left": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 410,
            "end": 412,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 415,
            "end": 420,
            "left": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 419,
              "end": 420,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 428,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 431,
            "end": 436,
            "left": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 444,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 447,
            "end": 452,
            "left": {
              "type": "Identifier",
              "start": 447,
              "end": 448,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 451,
              "end": 452,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 458,
            "end": 460,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 463,
            "end": 468,
            "left": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 493,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 496,
            "end": 503,
            "left": {
              "type": "Identifier",
              "start": 496,
              "end": 497,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 500,
              "end": 503,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 512,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 515,
            "end": 524,
            "left": {
              "type": "Identifier",
              "start": 515,
              "end": 516,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "start": 519,
              "end": 524,
              "callee": {
                "type": "Identifier",
                "start": 519,
                "end": 522,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 533,
            "name": "r12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 536,
            "end": 541,
            "left": {
              "type": "Identifier",
              "start": 536,
              "end": 537,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 540,
              "end": 541,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 550,
            "name": "r13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 553,
            "end": 564,
            "left": {
              "type": "Identifier",
              "start": 553,
              "end": 554,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "NewExpression",
              "start": 557,
              "end": 564,
              "callee": {
                "type": "Identifier",
                "start": 561,
                "end": 562,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 573,
            "name": "r14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 576,
            "end": 581,
            "left": {
              "type": "Identifier",
              "start": 576,
              "end": 577,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 580,
              "end": 581,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 587,
            "end": 590,
            "name": "r15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 593,
            "end": 600,
            "left": {
              "type": "Identifier",
              "start": 593,
              "end": 594,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 597,
              "end": 600,
              "object": {
                "type": "Identifier",
                "start": 597,
                "end": 598,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 599,
                "end": 600,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 609,
            "name": "r16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 612,
            "end": 617,
            "left": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 623,
            "end": 626,
            "name": "r17",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 629,
            "end": 635,
            "left": {
              "type": "Identifier",
              "start": 629,
              "end": 630,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 633,
              "end": 635,
              "value": "",
              "raw": "''"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 641,
            "end": 644,
            "name": "r18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 647,
            "end": 654,
            "left": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 651,
              "end": 654,
              "value": 123,
              "raw": "123"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 660,
            "end": 663,
            "name": "r19",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 666,
            "end": 679,
            "left": {
              "type": "Identifier",
              "start": 666,
              "end": 667,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "ObjectExpression",
              "start": 670,
              "end": 679,
              "properties": [
                {
                  "type": "Property",
                  "start": 672,
                  "end": 677,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 672,
                    "end": 673,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 675,
                    "end": 677,
                    "value": "",
                    "raw": "''"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 685,
            "end": 688,
            "name": "r20",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 691,
            "end": 724,
            "left": {
              "type": "Identifier",
              "start": 691,
              "end": 692,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 696,
              "end": 723,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 697,
                  "end": 706,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 698,
                    "end": 706,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 700,
                      "end": 706
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
