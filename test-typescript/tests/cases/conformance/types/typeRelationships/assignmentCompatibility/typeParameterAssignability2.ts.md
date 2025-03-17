__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 111,
  "end": 1333,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 111,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 123,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 140,
          "end": 144,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 141,
            "end": 144,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 143,
              "end": 144,
              "typeName": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 146,
          "end": 150,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 147,
            "end": 150,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 149,
              "end": 150,
              "typeName": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 152,
        "end": 192,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 158,
            "end": 164,
            "expression": {
              "type": "AssignmentExpression",
              "start": 158,
              "end": 163,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 178,
            "end": 184,
            "expression": {
              "type": "AssignmentExpression",
              "start": 178,
              "end": 183,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 123,
        "end": 139,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 125,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 127,
            "end": 138,
            "name": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 137,
              "end": 138,
              "typeName": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 194,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 207,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 224,
          "end": 228,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 225,
            "end": 228,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 227,
              "end": 228,
              "typeName": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 230,
          "end": 234,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 234,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 233,
              "end": 234,
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 236,
        "end": 276,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 242,
            "end": 248,
            "expression": {
              "type": "AssignmentExpression",
              "start": 242,
              "end": 247,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 262,
            "end": 268,
            "expression": {
              "type": "AssignmentExpression",
              "start": 262,
              "end": 267,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 262,
                "end": 263,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 266,
                "end": 267,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 207,
        "end": 223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 208,
            "end": 219,
            "name": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 218,
              "end": 219,
              "typeName": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 221,
            "end": 222,
            "name": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 278,
      "end": 449,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 291,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 321,
          "end": 325,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 322,
            "end": 325,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 324,
              "end": 325,
              "typeName": {
                "type": "Identifier",
                "start": 324,
                "end": 325,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 327,
          "end": 331,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 328,
            "end": 331,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 330,
              "end": 331,
              "typeName": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
                "name": "U",
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
        {
          "type": "Identifier",
          "start": 333,
          "end": 337,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 334,
            "end": 337,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 336,
              "end": 337,
              "typeName": {
                "type": "Identifier",
                "start": 336,
                "end": 337,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 339,
        "end": 449,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 345,
            "end": 351,
            "expression": {
              "type": "AssignmentExpression",
              "start": 345,
              "end": 350,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 345,
                "end": 346,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 349,
                "end": 350,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 365,
            "end": 371,
            "expression": {
              "type": "AssignmentExpression",
              "start": 365,
              "end": 370,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 365,
                "end": 366,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 369,
                "end": 370,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 377,
            "end": 383,
            "expression": {
              "type": "AssignmentExpression",
              "start": 377,
              "end": 382,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 377,
                "end": 378,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 381,
                "end": 382,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 397,
            "end": 403,
            "expression": {
              "type": "AssignmentExpression",
              "start": 397,
              "end": 402,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 397,
                "end": 398,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 401,
                "end": 402,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 415,
            "end": 421,
            "expression": {
              "type": "AssignmentExpression",
              "start": 415,
              "end": 420,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 415,
                "end": 416,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 419,
                "end": 420,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 435,
            "end": 441,
            "expression": {
              "type": "AssignmentExpression",
              "start": 435,
              "end": 440,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 435,
                "end": 436,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 439,
                "end": 440,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 291,
        "end": 320,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 292,
            "end": 303,
            "name": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 302,
              "end": 303,
              "typeName": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 305,
            "end": 316,
            "name": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 315,
              "end": 316,
              "typeName": {
                "type": "Identifier",
                "start": 315,
                "end": 316,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 318,
            "end": 319,
            "name": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 451,
      "end": 776,
      "id": {
        "type": "Identifier",
        "start": 460,
        "end": 464,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 507,
          "end": 511,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 508,
            "end": 511,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 510,
              "end": 511,
              "typeName": {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 513,
          "end": 517,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 514,
            "end": 517,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 516,
              "end": 517,
              "typeName": {
                "type": "Identifier",
                "start": 516,
                "end": 517,
                "name": "U",
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
        {
          "type": "Identifier",
          "start": 519,
          "end": 523,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 520,
            "end": 523,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 522,
              "end": 523,
              "typeName": {
                "type": "Identifier",
                "start": 522,
                "end": 523,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 525,
        "end": 776,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 531,
            "end": 537,
            "expression": {
              "type": "AssignmentExpression",
              "start": 531,
              "end": 536,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 531,
                "end": 532,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 535,
                "end": 536,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 551,
            "end": 557,
            "expression": {
              "type": "AssignmentExpression",
              "start": 551,
              "end": 556,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 551,
                "end": 552,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 571,
            "end": 586,
            "expression": {
              "type": "AssignmentExpression",
              "start": 571,
              "end": 585,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 571,
                "end": 572,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "NewExpression",
                "start": 575,
                "end": 585,
                "callee": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 583,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 601,
            "end": 607,
            "expression": {
              "type": "AssignmentExpression",
              "start": 601,
              "end": 606,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 601,
                "end": 602,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 605,
                "end": 606,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 612,
            "end": 618,
            "expression": {
              "type": "AssignmentExpression",
              "start": 612,
              "end": 617,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 612,
                "end": 613,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 616,
                "end": 617,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 632,
            "end": 647,
            "expression": {
              "type": "AssignmentExpression",
              "start": 632,
              "end": 646,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 632,
                "end": 633,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "NewExpression",
                "start": 636,
                "end": 646,
                "callee": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 644,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 662,
            "end": 668,
            "expression": {
              "type": "AssignmentExpression",
              "start": 662,
              "end": 667,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 662,
                "end": 663,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 666,
                "end": 667,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 673,
            "end": 679,
            "expression": {
              "type": "AssignmentExpression",
              "start": 673,
              "end": 678,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 673,
                "end": 674,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 677,
                "end": 678,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 684,
            "end": 699,
            "expression": {
              "type": "AssignmentExpression",
              "start": 684,
              "end": 698,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 684,
                "end": 685,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "NewExpression",
                "start": 688,
                "end": 698,
                "callee": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 696,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 711,
            "end": 723,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 715,
                "end": 722,
                "id": {
                  "type": "Identifier",
                  "start": 715,
                  "end": 722,
                  "name": "d",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 716,
                    "end": 722,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 718,
                      "end": 722,
                      "typeName": {
                        "type": "Identifier",
                        "start": 718,
                        "end": 722,
                        "name": "Date",
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
            "type": "ExpressionStatement",
            "start": 728,
            "end": 734,
            "expression": {
              "type": "AssignmentExpression",
              "start": 728,
              "end": 733,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 728,
                "end": 729,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 732,
                "end": 733,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 745,
            "end": 751,
            "expression": {
              "type": "AssignmentExpression",
              "start": 745,
              "end": 750,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 745,
                "end": 746,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 749,
                "end": 750,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 762,
            "end": 768,
            "expression": {
              "type": "AssignmentExpression",
              "start": 762,
              "end": 767,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 762,
                "end": 763,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 766,
                "end": 767,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 464,
        "end": 506,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 465,
            "end": 476,
            "name": {
              "type": "Identifier",
              "start": 465,
              "end": 466,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 475,
              "end": 476,
              "typeName": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 478,
            "end": 489,
            "name": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 488,
              "end": 489,
              "typeName": {
                "type": "Identifier",
                "start": 488,
                "end": 489,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 491,
            "end": 505,
            "name": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 501,
              "end": 505,
              "typeName": {
                "type": "Identifier",
                "start": 501,
                "end": 505,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 833,
      "end": 1158,
      "id": {
        "type": "Identifier",
        "start": 842,
        "end": 846,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 889,
          "end": 893,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 890,
            "end": 893,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 892,
              "end": 893,
              "typeName": {
                "type": "Identifier",
                "start": 892,
                "end": 893,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 895,
          "end": 899,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 896,
            "end": 899,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 898,
              "end": 899,
              "typeName": {
                "type": "Identifier",
                "start": 898,
                "end": 899,
                "name": "U",
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
        {
          "type": "Identifier",
          "start": 901,
          "end": 905,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 902,
            "end": 905,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 904,
              "end": 905,
              "typeName": {
                "type": "Identifier",
                "start": 904,
                "end": 905,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 907,
        "end": 1158,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 913,
            "end": 919,
            "expression": {
              "type": "AssignmentExpression",
              "start": 913,
              "end": 918,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 913,
                "end": 914,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 917,
                "end": 918,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 933,
            "end": 939,
            "expression": {
              "type": "AssignmentExpression",
              "start": 933,
              "end": 938,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 933,
                "end": 934,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 937,
                "end": 938,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 953,
            "end": 968,
            "expression": {
              "type": "AssignmentExpression",
              "start": 953,
              "end": 967,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 953,
                "end": 954,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "NewExpression",
                "start": 957,
                "end": 967,
                "callee": {
                  "type": "Identifier",
                  "start": 961,
                  "end": 965,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 983,
            "end": 989,
            "expression": {
              "type": "AssignmentExpression",
              "start": 983,
              "end": 988,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 983,
                "end": 984,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 987,
                "end": 988,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 994,
            "end": 1000,
            "expression": {
              "type": "AssignmentExpression",
              "start": 994,
              "end": 999,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 994,
                "end": 995,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 998,
                "end": 999,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1014,
            "end": 1029,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1014,
              "end": 1028,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1014,
                "end": 1015,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "NewExpression",
                "start": 1018,
                "end": 1028,
                "callee": {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1026,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1044,
            "end": 1050,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1044,
              "end": 1049,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1044,
                "end": 1045,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1048,
                "end": 1049,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1055,
            "end": 1061,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1055,
              "end": 1060,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1055,
                "end": 1056,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1059,
                "end": 1060,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1066,
            "end": 1081,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1066,
              "end": 1080,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1066,
                "end": 1067,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "NewExpression",
                "start": 1070,
                "end": 1080,
                "callee": {
                  "type": "Identifier",
                  "start": 1074,
                  "end": 1078,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1093,
            "end": 1105,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1097,
                "end": 1104,
                "id": {
                  "type": "Identifier",
                  "start": 1097,
                  "end": 1104,
                  "name": "d",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1098,
                    "end": 1104,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1100,
                      "end": 1104,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1100,
                        "end": 1104,
                        "name": "Date",
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
            "type": "ExpressionStatement",
            "start": 1110,
            "end": 1116,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1110,
              "end": 1115,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1110,
                "end": 1111,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1114,
                "end": 1115,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1127,
            "end": 1133,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1127,
              "end": 1132,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1127,
                "end": 1128,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1131,
                "end": 1132,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1144,
            "end": 1150,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1144,
              "end": 1149,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1144,
                "end": 1145,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1148,
                "end": 1149,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 846,
        "end": 888,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 847,
            "end": 861,
            "name": {
              "type": "Identifier",
              "start": 847,
              "end": 848,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 857,
              "end": 861,
              "typeName": {
                "type": "Identifier",
                "start": 857,
                "end": 861,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 863,
            "end": 874,
            "name": {
              "type": "Identifier",
              "start": 863,
              "end": 864,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 873,
              "end": 874,
              "typeName": {
                "type": "Identifier",
                "start": 873,
                "end": 874,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 876,
            "end": 887,
            "name": {
              "type": "Identifier",
              "start": 876,
              "end": 877,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 886,
              "end": 887,
              "typeName": {
                "type": "Identifier",
                "start": 886,
                "end": 887,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1160,
      "end": 1333,
      "id": {
        "type": "Identifier",
        "start": 1169,
        "end": 1173,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1193,
          "end": 1197,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1194,
            "end": 1197,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1196,
              "end": 1197,
              "typeName": {
                "type": "Identifier",
                "start": 1196,
                "end": 1197,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 1199,
          "end": 1203,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1200,
            "end": 1203,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1202,
              "end": 1203,
              "typeName": {
                "type": "Identifier",
                "start": 1202,
                "end": 1203,
                "name": "U",
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
        {
          "type": "Identifier",
          "start": 1205,
          "end": 1209,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1206,
            "end": 1209,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1208,
              "end": 1209,
              "typeName": {
                "type": "Identifier",
                "start": 1208,
                "end": 1209,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1211,
        "end": 1333,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1217,
            "end": 1223,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1217,
              "end": 1222,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1217,
                "end": 1218,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1221,
                "end": 1222,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1237,
            "end": 1243,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1237,
              "end": 1242,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1237,
                "end": 1238,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1241,
                "end": 1242,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1258,
            "end": 1264,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1258,
              "end": 1263,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1258,
                "end": 1259,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1262,
                "end": 1263,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1275,
            "end": 1281,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1275,
              "end": 1280,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1275,
                "end": 1276,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1279,
                "end": 1280,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1296,
            "end": 1302,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1296,
              "end": 1301,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1296,
                "end": 1297,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1300,
                "end": 1301,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1316,
            "end": 1322,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1316,
              "end": 1321,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1316,
                "end": 1317,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1320,
                "end": 1321,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1173,
        "end": 1192,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1174,
            "end": 1185,
            "name": {
              "type": "Identifier",
              "start": 1174,
              "end": 1175,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1184,
              "end": 1185,
              "typeName": {
                "type": "Identifier",
                "start": 1184,
                "end": 1185,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1187,
            "end": 1188,
            "name": {
              "type": "Identifier",
              "start": 1187,
              "end": 1188,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1190,
            "end": 1191,
            "name": {
              "type": "Identifier",
              "start": 1190,
              "end": 1191,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
