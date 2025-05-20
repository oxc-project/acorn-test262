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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
              "optional": false,
              "typeAnnotation": null
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
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
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
              "params": [],
              "returnType": null,
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
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
        "optional": false,
        "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 134,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 134,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 127,
                "end": 134
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
      "start": 136,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 149,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 143,
                "end": 149
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
      "start": 151,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 164,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 164,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 158,
                "end": 164,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 164,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 166,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 179,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 179,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 173,
                "end": 179,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 179,
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 228,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 234,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 237,
            "end": 242,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 250,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 253,
            "end": 258,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 253,
              "end": 254,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 266,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 269,
            "end": 274,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 269,
              "end": 270,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 328,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 331,
            "end": 336,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 344,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 347,
            "end": 352,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 388,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 391,
            "end": 396,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 395,
              "end": 396,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 450,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 453,
            "end": 458,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 453,
              "end": 454,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 457,
              "end": 458,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 466,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 469,
            "end": 474,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 469,
              "end": 470,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 473,
              "end": 474,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 482,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 485,
            "end": 490,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 489,
              "end": 490,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 515,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 518,
            "end": 526,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 518,
              "end": 519,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 522,
              "end": 526,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 532,
            "end": 535,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 538,
            "end": 550,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 538,
              "end": 542,
              "raw": "true",
              "value": true
            },
            "right": {
              "type": "Literal",
              "start": 545,
              "end": 550,
              "raw": "false",
              "value": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 556,
            "end": 559,
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 562,
            "end": 572,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 562,
              "end": 566,
              "raw": "true",
              "value": true
            },
            "right": {
              "type": "Literal",
              "start": 569,
              "end": 572,
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
      "start": 574,
      "end": 592,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 578,
          "end": 591,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 578,
            "end": 581,
            "decorators": [],
            "name": "r13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 584,
            "end": 591,
            "operator": "+",
            "left": {
              "type": "ObjectExpression",
              "start": 584,
              "end": 586,
              "properties": []
            },
            "right": {
              "type": "ObjectExpression",
              "start": 589,
              "end": 591,
              "properties": []
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 597,
            "end": 600,
            "decorators": [],
            "name": "r14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 603,
            "end": 608,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 617,
            "decorators": [],
            "name": "r15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 620,
            "end": 627,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 620,
              "end": 621,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 624,
              "end": 627,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 633,
            "end": 636,
            "decorators": [],
            "name": "r16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 639,
            "end": 648,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 639,
              "end": 640,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "CallExpression",
              "start": 643,
              "end": 648,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 643,
                "end": 646,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 657,
            "decorators": [],
            "name": "r17",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 660,
            "end": 665,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 664,
              "end": 665,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 674,
            "decorators": [],
            "name": "r18",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 677,
            "end": 690,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 677,
              "end": 680,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 677,
                "end": 678,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 679,
                "end": 680,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "NewExpression",
              "start": 683,
              "end": 690,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 687,
                "end": 688,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 699,
            "decorators": [],
            "name": "r19",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 702,
            "end": 715,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 702,
              "end": 705,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 702,
                "end": 703,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 704,
                "end": 705,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "CallExpression",
              "start": 708,
              "end": 715,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 708,
                "end": 713,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 708,
                  "end": 709,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 710,
                  "end": 713,
                  "decorators": [],
                  "name": "foo",
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
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 721,
            "end": 724,
            "decorators": [],
            "name": "r20",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 727,
            "end": 734,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 727,
              "end": 730,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 727,
                "end": 728,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 729,
                "end": 730,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 733,
              "end": 734,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
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
