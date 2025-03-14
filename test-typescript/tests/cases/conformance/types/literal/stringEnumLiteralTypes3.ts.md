__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2303,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 58,
      "body": {
        "type": "TSEnumBody",
        "start": 18,
        "end": 58,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 32,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "decorators": [],
              "name": "Unknown",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 30,
              "end": 32,
              "raw": "\"\"",
              "value": ""
            }
          },
          {
            "type": "TSEnumMember",
            "start": 34,
            "end": 45,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "decorators": [],
              "name": "Yes",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 40,
              "end": 45,
              "raw": "\"yes\"",
              "value": "yes"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 47,
            "end": 56,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 49,
              "decorators": [],
              "name": "No",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 52,
              "end": 56,
              "raw": "\"no\"",
              "value": "no"
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 17,
        "decorators": [],
        "name": "Choice",
        "optional": false
      }
    },
    {
      "type": "EmptyStatement",
      "start": 58,
      "end": 59
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 61,
      "end": 83,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "decorators": [],
        "name": "Yes",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 72,
        "end": 82,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 72,
          "end": 82,
          "left": {
            "type": "Identifier",
            "start": 72,
            "end": 78,
            "decorators": [],
            "name": "Choice",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 79,
            "end": 82,
            "decorators": [],
            "name": "Yes",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 84,
      "end": 120,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 94,
        "decorators": [],
        "name": "YesNo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 97,
        "end": 119,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 97,
            "end": 107,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 97,
              "end": 107,
              "left": {
                "type": "Identifier",
                "start": 97,
                "end": 103,
                "decorators": [],
                "name": "Choice",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 104,
                "end": 107,
                "decorators": [],
                "name": "Yes",
                "optional": false
              }
            }
          },
          {
            "type": "TSTypeReference",
            "start": 110,
            "end": 119,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 110,
              "end": 119,
              "left": {
                "type": "Identifier",
                "start": 110,
                "end": 116,
                "decorators": [],
                "name": "Choice",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 117,
                "end": 119,
                "decorators": [],
                "name": "No",
                "optional": false
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 121,
      "end": 157,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 131,
        "decorators": [],
        "name": "NoYes",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 134,
        "end": 156,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 134,
            "end": 143,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 134,
              "end": 143,
              "left": {
                "type": "Identifier",
                "start": 134,
                "end": 140,
                "decorators": [],
                "name": "Choice",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 141,
                "end": 143,
                "decorators": [],
                "name": "No",
                "optional": false
              }
            }
          },
          {
            "type": "TSTypeReference",
            "start": 146,
            "end": 156,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 146,
              "end": 156,
              "left": {
                "type": "Identifier",
                "start": 146,
                "end": 152,
                "decorators": [],
                "name": "Choice",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 153,
                "end": 156,
                "decorators": [],
                "name": "Yes",
                "optional": false
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 158,
      "end": 218,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 175,
        "decorators": [],
        "name": "UnknownYesNo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 178,
        "end": 217,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 178,
            "end": 192,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 178,
              "end": 192,
              "left": {
                "type": "Identifier",
                "start": 178,
                "end": 184,
                "decorators": [],
                "name": "Choice",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 185,
                "end": 192,
                "decorators": [],
                "name": "Unknown",
                "optional": false
              }
            }
          },
          {
            "type": "TSTypeReference",
            "start": 195,
            "end": 205,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 195,
              "end": 205,
              "left": {
                "type": "Identifier",
                "start": 195,
                "end": 201,
                "decorators": [],
                "name": "Choice",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 202,
                "end": 205,
                "decorators": [],
                "name": "Yes",
                "optional": false
              }
            }
          },
          {
            "type": "TSTypeReference",
            "start": 208,
            "end": 217,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 208,
              "end": 217,
              "left": {
                "type": "Identifier",
                "start": 208,
                "end": 214,
                "decorators": [],
                "name": "Choice",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 215,
                "end": 217,
                "decorators": [],
                "name": "No",
                "optional": false
              }
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 220,
      "end": 325,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 278,
        "end": 325,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 284,
            "end": 290,
            "expression": {
              "type": "AssignmentExpression",
              "start": 284,
              "end": 289,
              "operator": "=",
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
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 295,
            "end": 301,
            "expression": {
              "type": "AssignmentExpression",
              "start": 295,
              "end": 300,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 295,
                "end": 296,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 306,
            "end": 312,
            "expression": {
              "type": "AssignmentExpression",
              "start": 306,
              "end": 311,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 310,
                "end": 311,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 317,
            "end": 323,
            "expression": {
              "type": "AssignmentExpression",
              "start": 317,
              "end": 322,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 321,
                "end": 322,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 231,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 232,
          "end": 238,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 233,
            "end": 238,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 235,
              "end": 238,
              "typeName": {
                "type": "Identifier",
                "start": 235,
                "end": 238,
                "decorators": [],
                "name": "Yes",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 240,
          "end": 248,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 241,
            "end": 248,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 243,
              "end": 248,
              "typeName": {
                "type": "Identifier",
                "start": 243,
                "end": 248,
                "decorators": [],
                "name": "YesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 250,
          "end": 265,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 251,
            "end": 265,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 253,
              "end": 265,
              "typeName": {
                "type": "Identifier",
                "start": 253,
                "end": 265,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 267,
          "end": 276,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 268,
            "end": 276,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 270,
              "end": 276,
              "typeName": {
                "type": "Identifier",
                "start": 270,
                "end": 276,
                "decorators": [],
                "name": "Choice",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 327,
      "end": 432,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 385,
        "end": 432,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 391,
            "end": 397,
            "expression": {
              "type": "AssignmentExpression",
              "start": 391,
              "end": 396,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 391,
                "end": 392,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 395,
                "end": 396,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 402,
            "end": 408,
            "expression": {
              "type": "AssignmentExpression",
              "start": 402,
              "end": 407,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 402,
                "end": 403,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 406,
                "end": 407,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 413,
            "end": 419,
            "expression": {
              "type": "AssignmentExpression",
              "start": 413,
              "end": 418,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 413,
                "end": 414,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 417,
                "end": 418,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 424,
            "end": 430,
            "expression": {
              "type": "AssignmentExpression",
              "start": 424,
              "end": 429,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 428,
                "end": 429,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 338,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 339,
          "end": 345,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 340,
            "end": 345,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 342,
              "end": 345,
              "typeName": {
                "type": "Identifier",
                "start": 342,
                "end": 345,
                "decorators": [],
                "name": "Yes",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 347,
          "end": 355,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 348,
            "end": 355,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 350,
              "end": 355,
              "typeName": {
                "type": "Identifier",
                "start": 350,
                "end": 355,
                "decorators": [],
                "name": "YesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 357,
          "end": 372,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 358,
            "end": 372,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 360,
              "end": 372,
              "typeName": {
                "type": "Identifier",
                "start": 360,
                "end": 372,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 374,
          "end": 383,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 375,
            "end": 383,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 377,
              "end": 383,
              "typeName": {
                "type": "Identifier",
                "start": 377,
                "end": 383,
                "decorators": [],
                "name": "Choice",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 434,
      "end": 539,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 492,
        "end": 539,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 498,
            "end": 504,
            "expression": {
              "type": "AssignmentExpression",
              "start": 498,
              "end": 503,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 498,
                "end": 499,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 502,
                "end": 503,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 509,
            "end": 515,
            "expression": {
              "type": "AssignmentExpression",
              "start": 509,
              "end": 514,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 509,
                "end": 510,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 513,
                "end": 514,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 520,
            "end": 526,
            "expression": {
              "type": "AssignmentExpression",
              "start": 520,
              "end": 525,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 520,
                "end": 521,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 524,
                "end": 525,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
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
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 535,
                "end": 536,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 443,
        "end": 445,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 446,
          "end": 452,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 447,
            "end": 452,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 449,
              "end": 452,
              "typeName": {
                "type": "Identifier",
                "start": 449,
                "end": 452,
                "decorators": [],
                "name": "Yes",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 454,
          "end": 462,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 455,
            "end": 462,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 457,
              "end": 462,
              "typeName": {
                "type": "Identifier",
                "start": 457,
                "end": 462,
                "decorators": [],
                "name": "YesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 464,
          "end": 479,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 465,
            "end": 479,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 467,
              "end": 479,
              "typeName": {
                "type": "Identifier",
                "start": 467,
                "end": 479,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 481,
          "end": 490,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 482,
            "end": 490,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 484,
              "end": 490,
              "typeName": {
                "type": "Identifier",
                "start": 484,
                "end": 490,
                "decorators": [],
                "name": "Choice",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 541,
      "end": 646,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 599,
        "end": 646,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 605,
            "end": 611,
            "expression": {
              "type": "AssignmentExpression",
              "start": 605,
              "end": 610,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 605,
                "end": 606,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 609,
                "end": 610,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 616,
            "end": 622,
            "expression": {
              "type": "AssignmentExpression",
              "start": 616,
              "end": 621,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 616,
                "end": 617,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 620,
                "end": 621,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 627,
            "end": 633,
            "expression": {
              "type": "AssignmentExpression",
              "start": 627,
              "end": 632,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 627,
                "end": 628,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 631,
                "end": 632,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 638,
            "end": 644,
            "expression": {
              "type": "AssignmentExpression",
              "start": 638,
              "end": 643,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 638,
                "end": 639,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 642,
                "end": 643,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 552,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 553,
          "end": 559,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 554,
            "end": 559,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 556,
              "end": 559,
              "typeName": {
                "type": "Identifier",
                "start": 556,
                "end": 559,
                "decorators": [],
                "name": "Yes",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 561,
          "end": 569,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 562,
            "end": 569,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 564,
              "end": 569,
              "typeName": {
                "type": "Identifier",
                "start": 564,
                "end": 569,
                "decorators": [],
                "name": "YesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 571,
          "end": 586,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 572,
            "end": 586,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 574,
              "end": 586,
              "typeName": {
                "type": "Identifier",
                "start": 574,
                "end": 586,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 588,
          "end": 597,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 589,
            "end": 597,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 591,
              "end": 597,
              "typeName": {
                "type": "Identifier",
                "start": 591,
                "end": 597,
                "decorators": [],
                "name": "Choice",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 648,
      "end": 961,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 706,
        "end": 961,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 712,
            "end": 731,
            "expression": {
              "type": "AssignmentExpression",
              "start": 712,
              "end": 730,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 712,
                "end": 713,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 716,
                "end": 730,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 716,
                  "end": 722,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 730,
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 736,
            "end": 751,
            "expression": {
              "type": "AssignmentExpression",
              "start": 736,
              "end": 750,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 736,
                "end": 737,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 740,
                "end": 750,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 740,
                  "end": 746,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 747,
                  "end": 750,
                  "decorators": [],
                  "name": "Yes",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 756,
            "end": 770,
            "expression": {
              "type": "AssignmentExpression",
              "start": 756,
              "end": 769,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 756,
                "end": 757,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 760,
                "end": 769,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 760,
                  "end": 766,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 769,
                  "decorators": [],
                  "name": "No",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 775,
            "end": 794,
            "expression": {
              "type": "AssignmentExpression",
              "start": 775,
              "end": 793,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 775,
                "end": 776,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 779,
                "end": 793,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 785,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 793,
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 799,
            "end": 814,
            "expression": {
              "type": "AssignmentExpression",
              "start": 799,
              "end": 813,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 799,
                "end": 800,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 803,
                "end": 813,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 803,
                  "end": 809,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 813,
                  "decorators": [],
                  "name": "Yes",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 819,
            "end": 833,
            "expression": {
              "type": "AssignmentExpression",
              "start": 819,
              "end": 832,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 819,
                "end": 820,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 823,
                "end": 832,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 823,
                  "end": 829,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 830,
                  "end": 832,
                  "decorators": [],
                  "name": "No",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 838,
            "end": 857,
            "expression": {
              "type": "AssignmentExpression",
              "start": 838,
              "end": 856,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 838,
                "end": 839,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 842,
                "end": 856,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 842,
                  "end": 848,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 849,
                  "end": 856,
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 862,
            "end": 877,
            "expression": {
              "type": "AssignmentExpression",
              "start": 862,
              "end": 876,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 862,
                "end": 863,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 866,
                "end": 876,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 866,
                  "end": 872,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 873,
                  "end": 876,
                  "decorators": [],
                  "name": "Yes",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 882,
            "end": 896,
            "expression": {
              "type": "AssignmentExpression",
              "start": 882,
              "end": 895,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 882,
                "end": 883,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 886,
                "end": 895,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 886,
                  "end": 892,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 893,
                  "end": 895,
                  "decorators": [],
                  "name": "No",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 901,
            "end": 920,
            "expression": {
              "type": "AssignmentExpression",
              "start": 901,
              "end": 919,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 901,
                "end": 902,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 905,
                "end": 919,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 911,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 912,
                  "end": 919,
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 925,
            "end": 940,
            "expression": {
              "type": "AssignmentExpression",
              "start": 925,
              "end": 939,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 925,
                "end": 926,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 929,
                "end": 939,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 929,
                  "end": 935,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 939,
                  "decorators": [],
                  "name": "Yes",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 945,
            "end": 959,
            "expression": {
              "type": "AssignmentExpression",
              "start": 945,
              "end": 958,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 945,
                "end": 946,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 949,
                "end": 958,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 949,
                  "end": 955,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 956,
                  "end": 958,
                  "decorators": [],
                  "name": "No",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 657,
        "end": 659,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 660,
          "end": 666,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 661,
            "end": 666,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 663,
              "end": 666,
              "typeName": {
                "type": "Identifier",
                "start": 663,
                "end": 666,
                "decorators": [],
                "name": "Yes",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 668,
          "end": 676,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 669,
            "end": 676,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 671,
              "end": 676,
              "typeName": {
                "type": "Identifier",
                "start": 671,
                "end": 676,
                "decorators": [],
                "name": "YesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 678,
          "end": 693,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 679,
            "end": 693,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 681,
              "end": 693,
              "typeName": {
                "type": "Identifier",
                "start": 681,
                "end": 693,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 695,
          "end": 704,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 696,
            "end": 704,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 698,
              "end": 704,
              "typeName": {
                "type": "Identifier",
                "start": 698,
                "end": 704,
                "decorators": [],
                "name": "Choice",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 963,
      "end": 1300,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1021,
        "end": 1300,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1027,
            "end": 1048,
            "expression": {
              "type": "BinaryExpression",
              "start": 1027,
              "end": 1047,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1027,
                "end": 1028,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 1033,
                "end": 1047,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1033,
                  "end": 1039,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1040,
                  "end": 1047,
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1053,
            "end": 1070,
            "expression": {
              "type": "BinaryExpression",
              "start": 1053,
              "end": 1069,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1053,
                "end": 1054,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 1059,
                "end": 1069,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1059,
                  "end": 1065,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1066,
                  "end": 1069,
                  "decorators": [],
                  "name": "Yes",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1075,
            "end": 1091,
            "expression": {
              "type": "BinaryExpression",
              "start": 1075,
              "end": 1090,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1075,
                "end": 1076,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 1081,
                "end": 1090,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1081,
                  "end": 1087,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1088,
                  "end": 1090,
                  "decorators": [],
                  "name": "No",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1096,
            "end": 1117,
            "expression": {
              "type": "BinaryExpression",
              "start": 1096,
              "end": 1116,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1096,
                "end": 1097,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 1102,
                "end": 1116,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1102,
                  "end": 1108,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1109,
                  "end": 1116,
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1122,
            "end": 1139,
            "expression": {
              "type": "BinaryExpression",
              "start": 1122,
              "end": 1138,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1122,
                "end": 1123,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 1128,
                "end": 1138,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1128,
                  "end": 1134,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1135,
                  "end": 1138,
                  "decorators": [],
                  "name": "Yes",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1144,
            "end": 1160,
            "expression": {
              "type": "BinaryExpression",
              "start": 1144,
              "end": 1159,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1144,
                "end": 1145,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 1150,
                "end": 1159,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1150,
                  "end": 1156,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1157,
                  "end": 1159,
                  "decorators": [],
                  "name": "No",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1165,
            "end": 1186,
            "expression": {
              "type": "BinaryExpression",
              "start": 1165,
              "end": 1185,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1165,
                "end": 1166,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 1171,
                "end": 1185,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1171,
                  "end": 1177,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1178,
                  "end": 1185,
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1191,
            "end": 1208,
            "expression": {
              "type": "BinaryExpression",
              "start": 1191,
              "end": 1207,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1191,
                "end": 1192,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 1197,
                "end": 1207,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1197,
                  "end": 1203,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1204,
                  "end": 1207,
                  "decorators": [],
                  "name": "Yes",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1213,
            "end": 1229,
            "expression": {
              "type": "BinaryExpression",
              "start": 1213,
              "end": 1228,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1213,
                "end": 1214,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 1219,
                "end": 1228,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1219,
                  "end": 1225,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1226,
                  "end": 1228,
                  "decorators": [],
                  "name": "No",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1234,
            "end": 1255,
            "expression": {
              "type": "BinaryExpression",
              "start": 1234,
              "end": 1254,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1234,
                "end": 1235,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 1240,
                "end": 1254,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1240,
                  "end": 1246,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1247,
                  "end": 1254,
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1260,
            "end": 1277,
            "expression": {
              "type": "BinaryExpression",
              "start": 1260,
              "end": 1276,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1260,
                "end": 1261,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 1266,
                "end": 1276,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1266,
                  "end": 1272,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1273,
                  "end": 1276,
                  "decorators": [],
                  "name": "Yes",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1282,
            "end": 1298,
            "expression": {
              "type": "BinaryExpression",
              "start": 1282,
              "end": 1297,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1282,
                "end": 1283,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 1288,
                "end": 1297,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1288,
                  "end": 1294,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1295,
                  "end": 1297,
                  "decorators": [],
                  "name": "No",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 972,
        "end": 974,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 975,
          "end": 981,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 976,
            "end": 981,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 978,
              "end": 981,
              "typeName": {
                "type": "Identifier",
                "start": 978,
                "end": 981,
                "decorators": [],
                "name": "Yes",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 983,
          "end": 991,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 984,
            "end": 991,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 986,
              "end": 991,
              "typeName": {
                "type": "Identifier",
                "start": 986,
                "end": 991,
                "decorators": [],
                "name": "YesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 993,
          "end": 1008,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 994,
            "end": 1008,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 996,
              "end": 1008,
              "typeName": {
                "type": "Identifier",
                "start": 996,
                "end": 1008,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1010,
          "end": 1019,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1011,
            "end": 1019,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1013,
              "end": 1019,
              "typeName": {
                "type": "Identifier",
                "start": 1013,
                "end": 1019,
                "decorators": [],
                "name": "Choice",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1302,
      "end": 1571,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1360,
        "end": 1571,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1366,
            "end": 1374,
            "expression": {
              "type": "BinaryExpression",
              "start": 1366,
              "end": 1373,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1366,
                "end": 1367,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1372,
                "end": 1373,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1379,
            "end": 1387,
            "expression": {
              "type": "BinaryExpression",
              "start": 1379,
              "end": 1386,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1379,
                "end": 1380,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1385,
                "end": 1386,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1392,
            "end": 1400,
            "expression": {
              "type": "BinaryExpression",
              "start": 1392,
              "end": 1399,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1392,
                "end": 1393,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1398,
                "end": 1399,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1405,
            "end": 1413,
            "expression": {
              "type": "BinaryExpression",
              "start": 1405,
              "end": 1412,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1405,
                "end": 1406,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1411,
                "end": 1412,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1418,
            "end": 1426,
            "expression": {
              "type": "BinaryExpression",
              "start": 1418,
              "end": 1425,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1418,
                "end": 1419,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1424,
                "end": 1425,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1431,
            "end": 1439,
            "expression": {
              "type": "BinaryExpression",
              "start": 1431,
              "end": 1438,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1431,
                "end": 1432,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1437,
                "end": 1438,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1444,
            "end": 1452,
            "expression": {
              "type": "BinaryExpression",
              "start": 1444,
              "end": 1451,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1444,
                "end": 1445,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1450,
                "end": 1451,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1457,
            "end": 1465,
            "expression": {
              "type": "BinaryExpression",
              "start": 1457,
              "end": 1464,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1457,
                "end": 1458,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1463,
                "end": 1464,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1470,
            "end": 1478,
            "expression": {
              "type": "BinaryExpression",
              "start": 1470,
              "end": 1477,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1470,
                "end": 1471,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1476,
                "end": 1477,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1483,
            "end": 1491,
            "expression": {
              "type": "BinaryExpression",
              "start": 1483,
              "end": 1490,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1483,
                "end": 1484,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1489,
                "end": 1490,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1496,
            "end": 1504,
            "expression": {
              "type": "BinaryExpression",
              "start": 1496,
              "end": 1503,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1496,
                "end": 1497,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1502,
                "end": 1503,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1509,
            "end": 1517,
            "expression": {
              "type": "BinaryExpression",
              "start": 1509,
              "end": 1516,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1509,
                "end": 1510,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1515,
                "end": 1516,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1522,
            "end": 1530,
            "expression": {
              "type": "BinaryExpression",
              "start": 1522,
              "end": 1529,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1522,
                "end": 1523,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1528,
                "end": 1529,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1535,
            "end": 1543,
            "expression": {
              "type": "BinaryExpression",
              "start": 1535,
              "end": 1542,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1535,
                "end": 1536,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1541,
                "end": 1542,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1548,
            "end": 1556,
            "expression": {
              "type": "BinaryExpression",
              "start": 1548,
              "end": 1555,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1548,
                "end": 1549,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1554,
                "end": 1555,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1561,
            "end": 1569,
            "expression": {
              "type": "BinaryExpression",
              "start": 1561,
              "end": 1568,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1561,
                "end": 1562,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1567,
                "end": 1568,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1311,
        "end": 1313,
        "decorators": [],
        "name": "f7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1314,
          "end": 1320,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1315,
            "end": 1320,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1317,
              "end": 1320,
              "typeName": {
                "type": "Identifier",
                "start": 1317,
                "end": 1320,
                "decorators": [],
                "name": "Yes",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1322,
          "end": 1330,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1323,
            "end": 1330,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1325,
              "end": 1330,
              "typeName": {
                "type": "Identifier",
                "start": 1325,
                "end": 1330,
                "decorators": [],
                "name": "YesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1332,
          "end": 1347,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1333,
            "end": 1347,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1335,
              "end": 1347,
              "typeName": {
                "type": "Identifier",
                "start": 1335,
                "end": 1347,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1349,
          "end": 1358,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1350,
            "end": 1358,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1352,
              "end": 1358,
              "typeName": {
                "type": "Identifier",
                "start": 1352,
                "end": 1358,
                "decorators": [],
                "name": "Choice",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1573,
      "end": 1747,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1599,
        "end": 1747,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1605,
            "end": 1731,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1626,
                "end": 1656,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1647,
                    "end": 1656,
                    "argument": {
                      "type": "Identifier",
                      "start": 1654,
                      "end": 1655,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1631,
                  "end": 1645,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1631,
                    "end": 1637,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1638,
                    "end": 1645,
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 1665,
                "end": 1691,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1682,
                    "end": 1691,
                    "argument": {
                      "type": "Identifier",
                      "start": 1689,
                      "end": 1690,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1670,
                  "end": 1680,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1670,
                    "end": 1676,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1677,
                    "end": 1680,
                    "decorators": [],
                    "name": "Yes",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 1700,
                "end": 1725,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1716,
                    "end": 1725,
                    "argument": {
                      "type": "Identifier",
                      "start": 1723,
                      "end": 1724,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1705,
                  "end": 1714,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1705,
                    "end": 1711,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1712,
                    "end": 1714,
                    "decorators": [],
                    "name": "No",
                    "optional": false
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 1613,
              "end": 1614,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1736,
            "end": 1745,
            "argument": {
              "type": "Identifier",
              "start": 1743,
              "end": 1744,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1582,
        "end": 1585,
        "decorators": [],
        "name": "f10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1586,
          "end": 1592,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1587,
            "end": 1592,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1589,
              "end": 1592,
              "typeName": {
                "type": "Identifier",
                "start": 1589,
                "end": 1592,
                "decorators": [],
                "name": "Yes",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1593,
        "end": 1598,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1595,
          "end": 1598,
          "typeName": {
            "type": "Identifier",
            "start": 1595,
            "end": 1598,
            "decorators": [],
            "name": "Yes",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1749,
      "end": 1927,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1779,
        "end": 1927,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1785,
            "end": 1911,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1806,
                "end": 1836,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1827,
                    "end": 1836,
                    "argument": {
                      "type": "Identifier",
                      "start": 1834,
                      "end": 1835,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1811,
                  "end": 1825,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1811,
                    "end": 1817,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1818,
                    "end": 1825,
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 1845,
                "end": 1871,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1862,
                    "end": 1871,
                    "argument": {
                      "type": "Identifier",
                      "start": 1869,
                      "end": 1870,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1850,
                  "end": 1860,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1850,
                    "end": 1856,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1857,
                    "end": 1860,
                    "decorators": [],
                    "name": "Yes",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 1880,
                "end": 1905,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1896,
                    "end": 1905,
                    "argument": {
                      "type": "Identifier",
                      "start": 1903,
                      "end": 1904,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1885,
                  "end": 1894,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1885,
                    "end": 1891,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1892,
                    "end": 1894,
                    "decorators": [],
                    "name": "No",
                    "optional": false
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 1793,
              "end": 1794,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1916,
            "end": 1925,
            "argument": {
              "type": "Identifier",
              "start": 1923,
              "end": 1924,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1758,
        "end": 1761,
        "decorators": [],
        "name": "f11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1762,
          "end": 1770,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1763,
            "end": 1770,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1765,
              "end": 1770,
              "typeName": {
                "type": "Identifier",
                "start": 1765,
                "end": 1770,
                "decorators": [],
                "name": "YesNo",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1771,
        "end": 1778,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1773,
          "end": 1778,
          "typeName": {
            "type": "Identifier",
            "start": 1773,
            "end": 1778,
            "decorators": [],
            "name": "YesNo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1929,
      "end": 2121,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1973,
        "end": 2121,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1979,
            "end": 2105,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2000,
                "end": 2030,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2021,
                    "end": 2030,
                    "argument": {
                      "type": "Identifier",
                      "start": 2028,
                      "end": 2029,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2005,
                  "end": 2019,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2005,
                    "end": 2011,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2012,
                    "end": 2019,
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 2039,
                "end": 2065,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2056,
                    "end": 2065,
                    "argument": {
                      "type": "Identifier",
                      "start": 2063,
                      "end": 2064,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2044,
                  "end": 2054,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2044,
                    "end": 2050,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2051,
                    "end": 2054,
                    "decorators": [],
                    "name": "Yes",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 2074,
                "end": 2099,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2090,
                    "end": 2099,
                    "argument": {
                      "type": "Identifier",
                      "start": 2097,
                      "end": 2098,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2079,
                  "end": 2088,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2079,
                    "end": 2085,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2086,
                    "end": 2088,
                    "decorators": [],
                    "name": "No",
                    "optional": false
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 1987,
              "end": 1988,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2110,
            "end": 2119,
            "argument": {
              "type": "Identifier",
              "start": 2117,
              "end": 2118,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1938,
        "end": 1941,
        "decorators": [],
        "name": "f12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1942,
          "end": 1957,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1943,
            "end": 1957,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1945,
              "end": 1957,
              "typeName": {
                "type": "Identifier",
                "start": 1945,
                "end": 1957,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1958,
        "end": 1972,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1960,
          "end": 1972,
          "typeName": {
            "type": "Identifier",
            "start": 1960,
            "end": 1972,
            "decorators": [],
            "name": "UnknownYesNo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2123,
      "end": 2303,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2155,
        "end": 2303,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2161,
            "end": 2287,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2182,
                "end": 2212,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2203,
                    "end": 2212,
                    "argument": {
                      "type": "Identifier",
                      "start": 2210,
                      "end": 2211,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2187,
                  "end": 2201,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2187,
                    "end": 2193,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2194,
                    "end": 2201,
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 2221,
                "end": 2247,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2238,
                    "end": 2247,
                    "argument": {
                      "type": "Identifier",
                      "start": 2245,
                      "end": 2246,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2226,
                  "end": 2236,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2226,
                    "end": 2232,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2233,
                    "end": 2236,
                    "decorators": [],
                    "name": "Yes",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 2256,
                "end": 2281,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2272,
                    "end": 2281,
                    "argument": {
                      "type": "Identifier",
                      "start": 2279,
                      "end": 2280,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2261,
                  "end": 2270,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2261,
                    "end": 2267,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2268,
                    "end": 2270,
                    "decorators": [],
                    "name": "No",
                    "optional": false
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 2169,
              "end": 2170,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2292,
            "end": 2301,
            "argument": {
              "type": "Identifier",
              "start": 2299,
              "end": 2300,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2132,
        "end": 2135,
        "decorators": [],
        "name": "f13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2136,
          "end": 2145,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2137,
            "end": 2145,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2139,
              "end": 2145,
              "typeName": {
                "type": "Identifier",
                "start": 2139,
                "end": 2145,
                "decorators": [],
                "name": "Choice",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2146,
        "end": 2154,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2148,
          "end": 2154,
          "typeName": {
            "type": "Identifier",
            "start": 2148,
            "end": 2154,
            "decorators": [],
            "name": "Choice",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
