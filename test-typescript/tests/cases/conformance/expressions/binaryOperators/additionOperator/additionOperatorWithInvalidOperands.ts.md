__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 735,
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
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 134,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 134,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 127,
                "end": 134
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
      "start": 136,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 149,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 143,
                "end": 149
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
      "start": 151,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 164,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 164,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 158,
                "end": 164,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 164,
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
      "start": 166,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 179,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 179,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 173,
                "end": 179,
                "typeName": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 179,
                  "name": "Number",
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
      "start": 228,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 234,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 237,
            "end": 242,
            "left": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
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
      "start": 244,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 250,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 253,
            "end": 258,
            "left": {
              "type": "Identifier",
              "start": 253,
              "end": 254,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
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
      "start": 260,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 266,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 269,
            "end": 274,
            "left": {
              "type": "Identifier",
              "start": 269,
              "end": 270,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
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
      "start": 322,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 328,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 331,
            "end": 336,
            "left": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
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
      "start": 338,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 344,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 347,
            "end": 352,
            "left": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
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
      "start": 382,
      "end": 397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 396,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 388,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 391,
            "end": 396,
            "left": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 395,
              "end": 396,
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
      "start": 444,
      "end": 459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 458,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 450,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 453,
            "end": 458,
            "left": {
              "type": "Identifier",
              "start": 453,
              "end": 454,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 457,
              "end": 458,
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
      "start": 460,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 464,
          "end": 474,
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 466,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 469,
            "end": 474,
            "left": {
              "type": "Identifier",
              "start": 469,
              "end": 470,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 473,
              "end": 474,
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
      "start": 476,
      "end": 491,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 490,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 482,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 485,
            "end": 490,
            "left": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 489,
              "end": 490,
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
      "start": 508,
      "end": 527,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 526,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 515,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 518,
            "end": 526,
            "left": {
              "type": "Identifier",
              "start": 518,
              "end": 519,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 522,
              "end": 526,
              "value": true,
              "raw": "true"
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
      "start": 528,
      "end": 551,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 532,
          "end": 550,
          "id": {
            "type": "Identifier",
            "start": 532,
            "end": 535,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 538,
            "end": 550,
            "left": {
              "type": "Literal",
              "start": 538,
              "end": 542,
              "value": true,
              "raw": "true"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 545,
              "end": 550,
              "value": false,
              "raw": "false"
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
      "start": 552,
      "end": 573,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 556,
          "end": 572,
          "id": {
            "type": "Identifier",
            "start": 556,
            "end": 559,
            "name": "r12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 562,
            "end": 572,
            "left": {
              "type": "Literal",
              "start": 562,
              "end": 566,
              "value": true,
              "raw": "true"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 569,
              "end": 572,
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
      "start": 574,
      "end": 592,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 578,
          "end": 591,
          "id": {
            "type": "Identifier",
            "start": 578,
            "end": 581,
            "name": "r13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 584,
            "end": 591,
            "left": {
              "type": "ObjectExpression",
              "start": 584,
              "end": 586,
              "properties": []
            },
            "operator": "+",
            "right": {
              "type": "ObjectExpression",
              "start": 589,
              "end": 591,
              "properties": []
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
      "start": 593,
      "end": 609,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 597,
          "end": 608,
          "id": {
            "type": "Identifier",
            "start": 597,
            "end": 600,
            "name": "r14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 603,
            "end": 608,
            "left": {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
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
      "start": 610,
      "end": 628,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 614,
          "end": 627,
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 617,
            "name": "r15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 620,
            "end": 627,
            "left": {
              "type": "Identifier",
              "start": 620,
              "end": 621,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 624,
              "end": 627,
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
      "start": 629,
      "end": 649,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 633,
          "end": 648,
          "id": {
            "type": "Identifier",
            "start": 633,
            "end": 636,
            "name": "r16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 639,
            "end": 648,
            "left": {
              "type": "Identifier",
              "start": 639,
              "end": 640,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "start": 643,
              "end": 648,
              "callee": {
                "type": "Identifier",
                "start": 643,
                "end": 646,
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
      "start": 650,
      "end": 666,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 665,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 657,
            "name": "r17",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 660,
            "end": 665,
            "left": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 664,
              "end": 665,
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
      "start": 667,
      "end": 691,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 671,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 674,
            "name": "r18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 677,
            "end": 690,
            "left": {
              "type": "MemberExpression",
              "start": 677,
              "end": 680,
              "object": {
                "type": "Identifier",
                "start": 677,
                "end": 678,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 679,
                "end": 680,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "NewExpression",
              "start": 683,
              "end": 690,
              "callee": {
                "type": "Identifier",
                "start": 687,
                "end": 688,
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
      "start": 692,
      "end": 716,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 715,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 699,
            "name": "r19",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 702,
            "end": 715,
            "left": {
              "type": "MemberExpression",
              "start": 702,
              "end": 705,
              "object": {
                "type": "Identifier",
                "start": 702,
                "end": 703,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 704,
                "end": 705,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "start": 708,
              "end": 715,
              "callee": {
                "type": "MemberExpression",
                "start": 708,
                "end": 713,
                "object": {
                  "type": "Identifier",
                  "start": 708,
                  "end": 709,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 710,
                  "end": 713,
                  "name": "foo",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 717,
      "end": 735,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 721,
          "end": 734,
          "id": {
            "type": "Identifier",
            "start": 721,
            "end": 724,
            "name": "r20",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 727,
            "end": 734,
            "left": {
              "type": "MemberExpression",
              "start": 727,
              "end": 730,
              "object": {
                "type": "Identifier",
                "start": 727,
                "end": 728,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 729,
                "end": 730,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 733,
              "end": 734,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
