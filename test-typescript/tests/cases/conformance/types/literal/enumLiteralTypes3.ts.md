__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2283,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 17,
        "name": "Choice",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 20,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 27,
            "name": "Unknown",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 29,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 32,
            "name": "Yes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 34,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 36,
            "name": "No",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 18,
        "end": 38,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 27,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "name": "Unknown",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 29,
            "end": 32,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 32,
              "name": "Yes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 34,
            "end": 36,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 36,
              "name": "No",
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
      "type": "EmptyStatement",
      "start": 38,
      "end": 39
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 41,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "name": "Yes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 52,
        "end": 62,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 52,
          "end": 62,
          "left": {
            "type": "Identifier",
            "start": 52,
            "end": 58,
            "name": "Choice",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "name": "Yes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 64,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 74,
        "name": "YesNo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 77,
        "end": 99,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 77,
            "end": 87,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 77,
              "end": 87,
              "left": {
                "type": "Identifier",
                "start": 77,
                "end": 83,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 84,
                "end": 87,
                "name": "Yes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 90,
            "end": 99,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 90,
              "end": 99,
              "left": {
                "type": "Identifier",
                "start": 90,
                "end": 96,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 97,
                "end": 99,
                "name": "No",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 101,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 111,
        "name": "NoYes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 114,
        "end": 136,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 114,
            "end": 123,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 114,
              "end": 123,
              "left": {
                "type": "Identifier",
                "start": 114,
                "end": 120,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 121,
                "end": 123,
                "name": "No",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 126,
            "end": 136,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 126,
              "end": 136,
              "left": {
                "type": "Identifier",
                "start": 126,
                "end": 132,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 133,
                "end": 136,
                "name": "Yes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 138,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 155,
        "name": "UnknownYesNo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 158,
        "end": 197,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 158,
            "end": 172,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 158,
              "end": 172,
              "left": {
                "type": "Identifier",
                "start": 158,
                "end": 164,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 165,
                "end": 172,
                "name": "Unknown",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 175,
            "end": 185,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 175,
              "end": 185,
              "left": {
                "type": "Identifier",
                "start": 175,
                "end": 181,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 182,
                "end": 185,
                "name": "Yes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 188,
            "end": 197,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 188,
              "end": 197,
              "left": {
                "type": "Identifier",
                "start": 188,
                "end": 194,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 195,
                "end": 197,
                "name": "No",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 200,
      "end": 305,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 211,
        "name": "f1",
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
          "start": 212,
          "end": 218,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 213,
            "end": 218,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 215,
              "end": 218,
              "typeName": {
                "type": "Identifier",
                "start": 215,
                "end": 218,
                "name": "Yes",
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
          "start": 220,
          "end": 228,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 221,
            "end": 228,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 223,
              "end": 228,
              "typeName": {
                "type": "Identifier",
                "start": 223,
                "end": 228,
                "name": "YesNo",
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
          "end": 245,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 245,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 233,
              "end": 245,
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 245,
                "name": "UnknownYesNo",
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
          "start": 247,
          "end": 256,
          "name": "d",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 256,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 250,
              "end": 256,
              "typeName": {
                "type": "Identifier",
                "start": 250,
                "end": 256,
                "name": "Choice",
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
        "start": 258,
        "end": 305,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 264,
            "end": 270,
            "expression": {
              "type": "AssignmentExpression",
              "start": 264,
              "end": 269,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 264,
                "end": 265,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 275,
            "end": 281,
            "expression": {
              "type": "AssignmentExpression",
              "start": 275,
              "end": 280,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 275,
                "end": 276,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 279,
                "end": 280,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 286,
            "end": 292,
            "expression": {
              "type": "AssignmentExpression",
              "start": 286,
              "end": 291,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 286,
                "end": 287,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 290,
                "end": 291,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 297,
            "end": 303,
            "expression": {
              "type": "AssignmentExpression",
              "start": 297,
              "end": 302,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 297,
                "end": 298,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 301,
                "end": 302,
                "name": "d",
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
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 307,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 316,
        "end": 318,
        "name": "f2",
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
          "start": 319,
          "end": 325,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 320,
            "end": 325,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 322,
              "end": 325,
              "typeName": {
                "type": "Identifier",
                "start": 322,
                "end": 325,
                "name": "Yes",
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
          "end": 335,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 328,
            "end": 335,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 330,
              "end": 335,
              "typeName": {
                "type": "Identifier",
                "start": 330,
                "end": 335,
                "name": "YesNo",
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
          "start": 337,
          "end": 352,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 338,
            "end": 352,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 340,
              "end": 352,
              "typeName": {
                "type": "Identifier",
                "start": 340,
                "end": 352,
                "name": "UnknownYesNo",
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
          "start": 354,
          "end": 363,
          "name": "d",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 355,
            "end": 363,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 357,
              "end": 363,
              "typeName": {
                "type": "Identifier",
                "start": 357,
                "end": 363,
                "name": "Choice",
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
        "start": 365,
        "end": 412,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 371,
            "end": 377,
            "expression": {
              "type": "AssignmentExpression",
              "start": 371,
              "end": 376,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 371,
                "end": 372,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 375,
                "end": 376,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 382,
            "end": 388,
            "expression": {
              "type": "AssignmentExpression",
              "start": 382,
              "end": 387,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 382,
                "end": 383,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 386,
                "end": 387,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 393,
            "end": 399,
            "expression": {
              "type": "AssignmentExpression",
              "start": 393,
              "end": 398,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 393,
                "end": 394,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 397,
                "end": 398,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 404,
            "end": 410,
            "expression": {
              "type": "AssignmentExpression",
              "start": 404,
              "end": 409,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 404,
                "end": 405,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 408,
                "end": 409,
                "name": "d",
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
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 414,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 423,
        "end": 425,
        "name": "f3",
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
          "start": 426,
          "end": 432,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 427,
            "end": 432,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 429,
              "end": 432,
              "typeName": {
                "type": "Identifier",
                "start": 429,
                "end": 432,
                "name": "Yes",
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
          "start": 434,
          "end": 442,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 435,
            "end": 442,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 437,
              "end": 442,
              "typeName": {
                "type": "Identifier",
                "start": 437,
                "end": 442,
                "name": "YesNo",
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
          "start": 444,
          "end": 459,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 445,
            "end": 459,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 447,
              "end": 459,
              "typeName": {
                "type": "Identifier",
                "start": 447,
                "end": 459,
                "name": "UnknownYesNo",
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
          "start": 461,
          "end": 470,
          "name": "d",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 462,
            "end": 470,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 464,
              "end": 470,
              "typeName": {
                "type": "Identifier",
                "start": 464,
                "end": 470,
                "name": "Choice",
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
        "start": 472,
        "end": 519,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 478,
            "end": 484,
            "expression": {
              "type": "AssignmentExpression",
              "start": 478,
              "end": 483,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 478,
                "end": 479,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 482,
                "end": 483,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 489,
            "end": 495,
            "expression": {
              "type": "AssignmentExpression",
              "start": 489,
              "end": 494,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 489,
                "end": 490,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 493,
                "end": 494,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 500,
            "end": 506,
            "expression": {
              "type": "AssignmentExpression",
              "start": 500,
              "end": 505,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 500,
                "end": 501,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 504,
                "end": 505,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 511,
            "end": 517,
            "expression": {
              "type": "AssignmentExpression",
              "start": 511,
              "end": 516,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 511,
                "end": 512,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 515,
                "end": 516,
                "name": "d",
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
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 521,
      "end": 626,
      "id": {
        "type": "Identifier",
        "start": 530,
        "end": 532,
        "name": "f4",
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
          "start": 533,
          "end": 539,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 534,
            "end": 539,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 536,
              "end": 539,
              "typeName": {
                "type": "Identifier",
                "start": 536,
                "end": 539,
                "name": "Yes",
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
          "start": 541,
          "end": 549,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 542,
            "end": 549,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 544,
              "end": 549,
              "typeName": {
                "type": "Identifier",
                "start": 544,
                "end": 549,
                "name": "YesNo",
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
          "start": 551,
          "end": 566,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 552,
            "end": 566,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 554,
              "end": 566,
              "typeName": {
                "type": "Identifier",
                "start": 554,
                "end": 566,
                "name": "UnknownYesNo",
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
          "start": 568,
          "end": 577,
          "name": "d",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 569,
            "end": 577,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 571,
              "end": 577,
              "typeName": {
                "type": "Identifier",
                "start": 571,
                "end": 577,
                "name": "Choice",
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
        "start": 579,
        "end": 626,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 585,
            "end": 591,
            "expression": {
              "type": "AssignmentExpression",
              "start": 585,
              "end": 590,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 585,
                "end": 586,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 589,
                "end": 590,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 596,
            "end": 602,
            "expression": {
              "type": "AssignmentExpression",
              "start": 596,
              "end": 601,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 596,
                "end": 597,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 600,
                "end": 601,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 607,
            "end": 613,
            "expression": {
              "type": "AssignmentExpression",
              "start": 607,
              "end": 612,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 607,
                "end": 608,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 611,
                "end": 612,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 618,
            "end": 624,
            "expression": {
              "type": "AssignmentExpression",
              "start": 618,
              "end": 623,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 618,
                "end": 619,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 622,
                "end": 623,
                "name": "d",
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
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 628,
      "end": 941,
      "id": {
        "type": "Identifier",
        "start": 637,
        "end": 639,
        "name": "f5",
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
          "start": 640,
          "end": 646,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 641,
            "end": 646,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 643,
              "end": 646,
              "typeName": {
                "type": "Identifier",
                "start": 643,
                "end": 646,
                "name": "Yes",
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
          "start": 648,
          "end": 656,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 649,
            "end": 656,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 651,
              "end": 656,
              "typeName": {
                "type": "Identifier",
                "start": 651,
                "end": 656,
                "name": "YesNo",
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
          "start": 658,
          "end": 673,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 659,
            "end": 673,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 661,
              "end": 673,
              "typeName": {
                "type": "Identifier",
                "start": 661,
                "end": 673,
                "name": "UnknownYesNo",
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
          "start": 675,
          "end": 684,
          "name": "d",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 676,
            "end": 684,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 678,
              "end": 684,
              "typeName": {
                "type": "Identifier",
                "start": 678,
                "end": 684,
                "name": "Choice",
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
        "start": 686,
        "end": 941,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 692,
            "end": 711,
            "expression": {
              "type": "AssignmentExpression",
              "start": 692,
              "end": 710,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 692,
                "end": 693,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 696,
                "end": 710,
                "object": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 702,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 703,
                  "end": 710,
                  "name": "Unknown",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 716,
            "end": 731,
            "expression": {
              "type": "AssignmentExpression",
              "start": 716,
              "end": 730,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 716,
                "end": 717,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 720,
                "end": 730,
                "object": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 726,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 727,
                  "end": 730,
                  "name": "Yes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 736,
            "end": 750,
            "expression": {
              "type": "AssignmentExpression",
              "start": 736,
              "end": 749,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 736,
                "end": 737,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 740,
                "end": 749,
                "object": {
                  "type": "Identifier",
                  "start": 740,
                  "end": 746,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 747,
                  "end": 749,
                  "name": "No",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 755,
            "end": 774,
            "expression": {
              "type": "AssignmentExpression",
              "start": 755,
              "end": 773,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 755,
                "end": 756,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 759,
                "end": 773,
                "object": {
                  "type": "Identifier",
                  "start": 759,
                  "end": 765,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 766,
                  "end": 773,
                  "name": "Unknown",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 779,
            "end": 794,
            "expression": {
              "type": "AssignmentExpression",
              "start": 779,
              "end": 793,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 779,
                "end": 780,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 783,
                "end": 793,
                "object": {
                  "type": "Identifier",
                  "start": 783,
                  "end": 789,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 790,
                  "end": 793,
                  "name": "Yes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 799,
            "end": 813,
            "expression": {
              "type": "AssignmentExpression",
              "start": 799,
              "end": 812,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 799,
                "end": 800,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 803,
                "end": 812,
                "object": {
                  "type": "Identifier",
                  "start": 803,
                  "end": 809,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 812,
                  "name": "No",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 818,
            "end": 837,
            "expression": {
              "type": "AssignmentExpression",
              "start": 818,
              "end": 836,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 818,
                "end": 819,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 822,
                "end": 836,
                "object": {
                  "type": "Identifier",
                  "start": 822,
                  "end": 828,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 829,
                  "end": 836,
                  "name": "Unknown",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 842,
            "end": 857,
            "expression": {
              "type": "AssignmentExpression",
              "start": 842,
              "end": 856,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 842,
                "end": 843,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 846,
                "end": 856,
                "object": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 852,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 853,
                  "end": 856,
                  "name": "Yes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 862,
            "end": 876,
            "expression": {
              "type": "AssignmentExpression",
              "start": 862,
              "end": 875,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 862,
                "end": 863,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 866,
                "end": 875,
                "object": {
                  "type": "Identifier",
                  "start": 866,
                  "end": 872,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 873,
                  "end": 875,
                  "name": "No",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 881,
            "end": 900,
            "expression": {
              "type": "AssignmentExpression",
              "start": 881,
              "end": 899,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 881,
                "end": 882,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 885,
                "end": 899,
                "object": {
                  "type": "Identifier",
                  "start": 885,
                  "end": 891,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 892,
                  "end": 899,
                  "name": "Unknown",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 905,
            "end": 920,
            "expression": {
              "type": "AssignmentExpression",
              "start": 905,
              "end": 919,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 905,
                "end": 906,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 909,
                "end": 919,
                "object": {
                  "type": "Identifier",
                  "start": 909,
                  "end": 915,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 916,
                  "end": 919,
                  "name": "Yes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 925,
            "end": 939,
            "expression": {
              "type": "AssignmentExpression",
              "start": 925,
              "end": 938,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 925,
                "end": 926,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 929,
                "end": 938,
                "object": {
                  "type": "Identifier",
                  "start": 929,
                  "end": 935,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 938,
                  "name": "No",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 943,
      "end": 1280,
      "id": {
        "type": "Identifier",
        "start": 952,
        "end": 954,
        "name": "f6",
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
          "start": 955,
          "end": 961,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 956,
            "end": 961,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 958,
              "end": 961,
              "typeName": {
                "type": "Identifier",
                "start": 958,
                "end": 961,
                "name": "Yes",
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
          "start": 963,
          "end": 971,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 964,
            "end": 971,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 966,
              "end": 971,
              "typeName": {
                "type": "Identifier",
                "start": 966,
                "end": 971,
                "name": "YesNo",
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
          "start": 973,
          "end": 988,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 974,
            "end": 988,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 976,
              "end": 988,
              "typeName": {
                "type": "Identifier",
                "start": 976,
                "end": 988,
                "name": "UnknownYesNo",
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
          "start": 990,
          "end": 999,
          "name": "d",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 991,
            "end": 999,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 993,
              "end": 999,
              "typeName": {
                "type": "Identifier",
                "start": 993,
                "end": 999,
                "name": "Choice",
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
        "start": 1001,
        "end": 1280,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1007,
            "end": 1028,
            "expression": {
              "type": "BinaryExpression",
              "start": 1007,
              "end": 1027,
              "left": {
                "type": "Identifier",
                "start": 1007,
                "end": 1008,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1013,
                "end": 1027,
                "object": {
                  "type": "Identifier",
                  "start": 1013,
                  "end": 1019,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1020,
                  "end": 1027,
                  "name": "Unknown",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1033,
            "end": 1050,
            "expression": {
              "type": "BinaryExpression",
              "start": 1033,
              "end": 1049,
              "left": {
                "type": "Identifier",
                "start": 1033,
                "end": 1034,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1039,
                "end": 1049,
                "object": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1045,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1046,
                  "end": 1049,
                  "name": "Yes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1055,
            "end": 1071,
            "expression": {
              "type": "BinaryExpression",
              "start": 1055,
              "end": 1070,
              "left": {
                "type": "Identifier",
                "start": 1055,
                "end": 1056,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1061,
                "end": 1070,
                "object": {
                  "type": "Identifier",
                  "start": 1061,
                  "end": 1067,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1068,
                  "end": 1070,
                  "name": "No",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1076,
            "end": 1097,
            "expression": {
              "type": "BinaryExpression",
              "start": 1076,
              "end": 1096,
              "left": {
                "type": "Identifier",
                "start": 1076,
                "end": 1077,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1082,
                "end": 1096,
                "object": {
                  "type": "Identifier",
                  "start": 1082,
                  "end": 1088,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1096,
                  "name": "Unknown",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1102,
            "end": 1119,
            "expression": {
              "type": "BinaryExpression",
              "start": 1102,
              "end": 1118,
              "left": {
                "type": "Identifier",
                "start": 1102,
                "end": 1103,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1108,
                "end": 1118,
                "object": {
                  "type": "Identifier",
                  "start": 1108,
                  "end": 1114,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1115,
                  "end": 1118,
                  "name": "Yes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1124,
            "end": 1140,
            "expression": {
              "type": "BinaryExpression",
              "start": 1124,
              "end": 1139,
              "left": {
                "type": "Identifier",
                "start": 1124,
                "end": 1125,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1130,
                "end": 1139,
                "object": {
                  "type": "Identifier",
                  "start": 1130,
                  "end": 1136,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1137,
                  "end": 1139,
                  "name": "No",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1145,
            "end": 1166,
            "expression": {
              "type": "BinaryExpression",
              "start": 1145,
              "end": 1165,
              "left": {
                "type": "Identifier",
                "start": 1145,
                "end": 1146,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1151,
                "end": 1165,
                "object": {
                  "type": "Identifier",
                  "start": 1151,
                  "end": 1157,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1158,
                  "end": 1165,
                  "name": "Unknown",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1171,
            "end": 1188,
            "expression": {
              "type": "BinaryExpression",
              "start": 1171,
              "end": 1187,
              "left": {
                "type": "Identifier",
                "start": 1171,
                "end": 1172,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1177,
                "end": 1187,
                "object": {
                  "type": "Identifier",
                  "start": 1177,
                  "end": 1183,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1184,
                  "end": 1187,
                  "name": "Yes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1193,
            "end": 1209,
            "expression": {
              "type": "BinaryExpression",
              "start": 1193,
              "end": 1208,
              "left": {
                "type": "Identifier",
                "start": 1193,
                "end": 1194,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1199,
                "end": 1208,
                "object": {
                  "type": "Identifier",
                  "start": 1199,
                  "end": 1205,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1206,
                  "end": 1208,
                  "name": "No",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1214,
            "end": 1235,
            "expression": {
              "type": "BinaryExpression",
              "start": 1214,
              "end": 1234,
              "left": {
                "type": "Identifier",
                "start": 1214,
                "end": 1215,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1220,
                "end": 1234,
                "object": {
                  "type": "Identifier",
                  "start": 1220,
                  "end": 1226,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1227,
                  "end": 1234,
                  "name": "Unknown",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1240,
            "end": 1257,
            "expression": {
              "type": "BinaryExpression",
              "start": 1240,
              "end": 1256,
              "left": {
                "type": "Identifier",
                "start": 1240,
                "end": 1241,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1246,
                "end": 1256,
                "object": {
                  "type": "Identifier",
                  "start": 1246,
                  "end": 1252,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1253,
                  "end": 1256,
                  "name": "Yes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1262,
            "end": 1278,
            "expression": {
              "type": "BinaryExpression",
              "start": 1262,
              "end": 1277,
              "left": {
                "type": "Identifier",
                "start": 1262,
                "end": 1263,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1268,
                "end": 1277,
                "object": {
                  "type": "Identifier",
                  "start": 1268,
                  "end": 1274,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1275,
                  "end": 1277,
                  "name": "No",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1282,
      "end": 1551,
      "id": {
        "type": "Identifier",
        "start": 1291,
        "end": 1293,
        "name": "f7",
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
          "start": 1294,
          "end": 1300,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1295,
            "end": 1300,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1297,
              "end": 1300,
              "typeName": {
                "type": "Identifier",
                "start": 1297,
                "end": 1300,
                "name": "Yes",
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
          "start": 1302,
          "end": 1310,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1303,
            "end": 1310,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1305,
              "end": 1310,
              "typeName": {
                "type": "Identifier",
                "start": 1305,
                "end": 1310,
                "name": "YesNo",
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
          "start": 1312,
          "end": 1327,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1313,
            "end": 1327,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1315,
              "end": 1327,
              "typeName": {
                "type": "Identifier",
                "start": 1315,
                "end": 1327,
                "name": "UnknownYesNo",
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
          "start": 1329,
          "end": 1338,
          "name": "d",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1330,
            "end": 1338,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1332,
              "end": 1338,
              "typeName": {
                "type": "Identifier",
                "start": 1332,
                "end": 1338,
                "name": "Choice",
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
        "start": 1340,
        "end": 1551,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1346,
            "end": 1354,
            "expression": {
              "type": "BinaryExpression",
              "start": 1346,
              "end": 1353,
              "left": {
                "type": "Identifier",
                "start": 1346,
                "end": 1347,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1352,
                "end": 1353,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1359,
            "end": 1367,
            "expression": {
              "type": "BinaryExpression",
              "start": 1359,
              "end": 1366,
              "left": {
                "type": "Identifier",
                "start": 1359,
                "end": 1360,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1365,
                "end": 1366,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1372,
            "end": 1380,
            "expression": {
              "type": "BinaryExpression",
              "start": 1372,
              "end": 1379,
              "left": {
                "type": "Identifier",
                "start": 1372,
                "end": 1373,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1378,
                "end": 1379,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1385,
            "end": 1393,
            "expression": {
              "type": "BinaryExpression",
              "start": 1385,
              "end": 1392,
              "left": {
                "type": "Identifier",
                "start": 1385,
                "end": 1386,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1391,
                "end": 1392,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1398,
            "end": 1406,
            "expression": {
              "type": "BinaryExpression",
              "start": 1398,
              "end": 1405,
              "left": {
                "type": "Identifier",
                "start": 1398,
                "end": 1399,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1404,
                "end": 1405,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1411,
            "end": 1419,
            "expression": {
              "type": "BinaryExpression",
              "start": 1411,
              "end": 1418,
              "left": {
                "type": "Identifier",
                "start": 1411,
                "end": 1412,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1417,
                "end": 1418,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1424,
            "end": 1432,
            "expression": {
              "type": "BinaryExpression",
              "start": 1424,
              "end": 1431,
              "left": {
                "type": "Identifier",
                "start": 1424,
                "end": 1425,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1430,
                "end": 1431,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1437,
            "end": 1445,
            "expression": {
              "type": "BinaryExpression",
              "start": 1437,
              "end": 1444,
              "left": {
                "type": "Identifier",
                "start": 1437,
                "end": 1438,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1443,
                "end": 1444,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1450,
            "end": 1458,
            "expression": {
              "type": "BinaryExpression",
              "start": 1450,
              "end": 1457,
              "left": {
                "type": "Identifier",
                "start": 1450,
                "end": 1451,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1456,
                "end": 1457,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1463,
            "end": 1471,
            "expression": {
              "type": "BinaryExpression",
              "start": 1463,
              "end": 1470,
              "left": {
                "type": "Identifier",
                "start": 1463,
                "end": 1464,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1469,
                "end": 1470,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1476,
            "end": 1484,
            "expression": {
              "type": "BinaryExpression",
              "start": 1476,
              "end": 1483,
              "left": {
                "type": "Identifier",
                "start": 1476,
                "end": 1477,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1482,
                "end": 1483,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1489,
            "end": 1497,
            "expression": {
              "type": "BinaryExpression",
              "start": 1489,
              "end": 1496,
              "left": {
                "type": "Identifier",
                "start": 1489,
                "end": 1490,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1495,
                "end": 1496,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1502,
            "end": 1510,
            "expression": {
              "type": "BinaryExpression",
              "start": 1502,
              "end": 1509,
              "left": {
                "type": "Identifier",
                "start": 1502,
                "end": 1503,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1508,
                "end": 1509,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1515,
            "end": 1523,
            "expression": {
              "type": "BinaryExpression",
              "start": 1515,
              "end": 1522,
              "left": {
                "type": "Identifier",
                "start": 1515,
                "end": 1516,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1521,
                "end": 1522,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1528,
            "end": 1536,
            "expression": {
              "type": "BinaryExpression",
              "start": 1528,
              "end": 1535,
              "left": {
                "type": "Identifier",
                "start": 1528,
                "end": 1529,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1534,
                "end": 1535,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1541,
            "end": 1549,
            "expression": {
              "type": "BinaryExpression",
              "start": 1541,
              "end": 1548,
              "left": {
                "type": "Identifier",
                "start": 1541,
                "end": 1542,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1547,
                "end": 1548,
                "name": "d",
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
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1553,
      "end": 1727,
      "id": {
        "type": "Identifier",
        "start": 1562,
        "end": 1565,
        "name": "f10",
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
          "start": 1566,
          "end": 1572,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1567,
            "end": 1572,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1569,
              "end": 1572,
              "typeName": {
                "type": "Identifier",
                "start": 1569,
                "end": 1572,
                "name": "Yes",
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
        "start": 1579,
        "end": 1727,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1585,
            "end": 1711,
            "discriminant": {
              "type": "Identifier",
              "start": 1593,
              "end": 1594,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1606,
                "end": 1636,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1627,
                    "end": 1636,
                    "argument": {
                      "type": "Identifier",
                      "start": 1634,
                      "end": 1635,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1611,
                  "end": 1625,
                  "object": {
                    "type": "Identifier",
                    "start": 1611,
                    "end": 1617,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1618,
                    "end": 1625,
                    "name": "Unknown",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 1645,
                "end": 1671,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1662,
                    "end": 1671,
                    "argument": {
                      "type": "Identifier",
                      "start": 1669,
                      "end": 1670,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1650,
                  "end": 1660,
                  "object": {
                    "type": "Identifier",
                    "start": 1650,
                    "end": 1656,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1657,
                    "end": 1660,
                    "name": "Yes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 1680,
                "end": 1705,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1696,
                    "end": 1705,
                    "argument": {
                      "type": "Identifier",
                      "start": 1703,
                      "end": 1704,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1685,
                  "end": 1694,
                  "object": {
                    "type": "Identifier",
                    "start": 1685,
                    "end": 1691,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1692,
                    "end": 1694,
                    "name": "No",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 1716,
            "end": 1725,
            "argument": {
              "type": "Identifier",
              "start": 1723,
              "end": 1724,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1573,
        "end": 1578,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1575,
          "end": 1578,
          "typeName": {
            "type": "Identifier",
            "start": 1575,
            "end": 1578,
            "name": "Yes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1729,
      "end": 1907,
      "id": {
        "type": "Identifier",
        "start": 1738,
        "end": 1741,
        "name": "f11",
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
          "start": 1742,
          "end": 1750,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1743,
            "end": 1750,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1745,
              "end": 1750,
              "typeName": {
                "type": "Identifier",
                "start": 1745,
                "end": 1750,
                "name": "YesNo",
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
        "start": 1759,
        "end": 1907,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1765,
            "end": 1891,
            "discriminant": {
              "type": "Identifier",
              "start": 1773,
              "end": 1774,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1786,
                "end": 1816,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1807,
                    "end": 1816,
                    "argument": {
                      "type": "Identifier",
                      "start": 1814,
                      "end": 1815,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1791,
                  "end": 1805,
                  "object": {
                    "type": "Identifier",
                    "start": 1791,
                    "end": 1797,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1798,
                    "end": 1805,
                    "name": "Unknown",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 1825,
                "end": 1851,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1842,
                    "end": 1851,
                    "argument": {
                      "type": "Identifier",
                      "start": 1849,
                      "end": 1850,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1830,
                  "end": 1840,
                  "object": {
                    "type": "Identifier",
                    "start": 1830,
                    "end": 1836,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1837,
                    "end": 1840,
                    "name": "Yes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 1860,
                "end": 1885,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1876,
                    "end": 1885,
                    "argument": {
                      "type": "Identifier",
                      "start": 1883,
                      "end": 1884,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1865,
                  "end": 1874,
                  "object": {
                    "type": "Identifier",
                    "start": 1865,
                    "end": 1871,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1872,
                    "end": 1874,
                    "name": "No",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 1896,
            "end": 1905,
            "argument": {
              "type": "Identifier",
              "start": 1903,
              "end": 1904,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1751,
        "end": 1758,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1753,
          "end": 1758,
          "typeName": {
            "type": "Identifier",
            "start": 1753,
            "end": 1758,
            "name": "YesNo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1909,
      "end": 2101,
      "id": {
        "type": "Identifier",
        "start": 1918,
        "end": 1921,
        "name": "f12",
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
          "start": 1922,
          "end": 1937,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1923,
            "end": 1937,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1925,
              "end": 1937,
              "typeName": {
                "type": "Identifier",
                "start": 1925,
                "end": 1937,
                "name": "UnknownYesNo",
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
        "start": 1953,
        "end": 2101,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1959,
            "end": 2085,
            "discriminant": {
              "type": "Identifier",
              "start": 1967,
              "end": 1968,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1980,
                "end": 2010,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2001,
                    "end": 2010,
                    "argument": {
                      "type": "Identifier",
                      "start": 2008,
                      "end": 2009,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1985,
                  "end": 1999,
                  "object": {
                    "type": "Identifier",
                    "start": 1985,
                    "end": 1991,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1992,
                    "end": 1999,
                    "name": "Unknown",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 2019,
                "end": 2045,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2036,
                    "end": 2045,
                    "argument": {
                      "type": "Identifier",
                      "start": 2043,
                      "end": 2044,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2024,
                  "end": 2034,
                  "object": {
                    "type": "Identifier",
                    "start": 2024,
                    "end": 2030,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2031,
                    "end": 2034,
                    "name": "Yes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 2054,
                "end": 2079,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2070,
                    "end": 2079,
                    "argument": {
                      "type": "Identifier",
                      "start": 2077,
                      "end": 2078,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2059,
                  "end": 2068,
                  "object": {
                    "type": "Identifier",
                    "start": 2059,
                    "end": 2065,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2066,
                    "end": 2068,
                    "name": "No",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 2090,
            "end": 2099,
            "argument": {
              "type": "Identifier",
              "start": 2097,
              "end": 2098,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1938,
        "end": 1952,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1940,
          "end": 1952,
          "typeName": {
            "type": "Identifier",
            "start": 1940,
            "end": 1952,
            "name": "UnknownYesNo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2103,
      "end": 2283,
      "id": {
        "type": "Identifier",
        "start": 2112,
        "end": 2115,
        "name": "f13",
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
          "start": 2116,
          "end": 2125,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2117,
            "end": 2125,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2119,
              "end": 2125,
              "typeName": {
                "type": "Identifier",
                "start": 2119,
                "end": 2125,
                "name": "Choice",
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
        "start": 2135,
        "end": 2283,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2141,
            "end": 2267,
            "discriminant": {
              "type": "Identifier",
              "start": 2149,
              "end": 2150,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2162,
                "end": 2192,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2183,
                    "end": 2192,
                    "argument": {
                      "type": "Identifier",
                      "start": 2190,
                      "end": 2191,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2167,
                  "end": 2181,
                  "object": {
                    "type": "Identifier",
                    "start": 2167,
                    "end": 2173,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2174,
                    "end": 2181,
                    "name": "Unknown",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 2201,
                "end": 2227,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2218,
                    "end": 2227,
                    "argument": {
                      "type": "Identifier",
                      "start": 2225,
                      "end": 2226,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2206,
                  "end": 2216,
                  "object": {
                    "type": "Identifier",
                    "start": 2206,
                    "end": 2212,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2213,
                    "end": 2216,
                    "name": "Yes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 2236,
                "end": 2261,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2252,
                    "end": 2261,
                    "argument": {
                      "type": "Identifier",
                      "start": 2259,
                      "end": 2260,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2241,
                  "end": 2250,
                  "object": {
                    "type": "Identifier",
                    "start": 2241,
                    "end": 2247,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2248,
                    "end": 2250,
                    "name": "No",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 2272,
            "end": 2281,
            "argument": {
              "type": "Identifier",
              "start": 2279,
              "end": 2280,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2126,
        "end": 2134,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2128,
          "end": 2134,
          "typeName": {
            "type": "Identifier",
            "start": 2128,
            "end": 2134,
            "name": "Choice",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
