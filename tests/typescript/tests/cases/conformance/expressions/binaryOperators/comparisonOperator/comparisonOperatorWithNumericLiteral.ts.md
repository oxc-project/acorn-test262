__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 550,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "BrandedNum",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 18,
        "end": 49,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 18,
            "end": 24
          },
          {
            "type": "TSTypeLiteral",
            "start": 27,
            "end": 49,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 29,
                "end": 47,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 42,
                  "decorators": [],
                  "name": "__numberBrand",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 44,
                    "end": 47
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 70,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 69,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 59,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 69,
                  "decorators": [],
                  "name": "BrandedNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 92,
      "expression": {
        "type": "BinaryExpression",
        "start": 86,
        "end": 91,
        "left": {
          "type": "Identifier",
          "start": 86,
          "end": 87,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": ">",
        "right": {
          "type": "Literal",
          "start": 90,
          "end": 91,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 93,
      "end": 107,
      "expression": {
        "type": "BinaryExpression",
        "start": 93,
        "end": 106,
        "left": {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": ">",
        "right": {
          "type": "TSTypeAssertion",
          "start": 97,
          "end": 106,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 98,
            "end": 104
          },
          "expression": {
            "type": "Literal",
            "start": 105,
            "end": 106,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 126,
      "expression": {
        "type": "BinaryExpression",
        "start": 108,
        "end": 125,
        "left": {
          "type": "Identifier",
          "start": 108,
          "end": 109,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": ">",
        "right": {
          "type": "TSTypeAssertion",
          "start": 112,
          "end": 125,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 113,
            "end": 123,
            "typeName": {
              "type": "Identifier",
              "start": 113,
              "end": 123,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "Literal",
            "start": 124,
            "end": 125,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 148,
      "expression": {
        "type": "BinaryExpression",
        "start": 142,
        "end": 147,
        "left": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 146,
          "end": 147,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 163,
      "expression": {
        "type": "BinaryExpression",
        "start": 149,
        "end": 162,
        "left": {
          "type": "Identifier",
          "start": 149,
          "end": 150,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "TSTypeAssertion",
          "start": 153,
          "end": 162,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 154,
            "end": 160
          },
          "expression": {
            "type": "Literal",
            "start": 161,
            "end": 162,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 182,
      "expression": {
        "type": "BinaryExpression",
        "start": 164,
        "end": 181,
        "left": {
          "type": "Identifier",
          "start": 164,
          "end": 165,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "TSTypeAssertion",
          "start": 168,
          "end": 181,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 169,
            "end": 179,
            "typeName": {
              "type": "Identifier",
              "start": 169,
              "end": 179,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "Literal",
            "start": 180,
            "end": 181,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 206,
      "expression": {
        "type": "BinaryExpression",
        "start": 199,
        "end": 205,
        "left": {
          "type": "Identifier",
          "start": 199,
          "end": 200,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": ">=",
        "right": {
          "type": "Literal",
          "start": 204,
          "end": 205,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 207,
      "end": 222,
      "expression": {
        "type": "BinaryExpression",
        "start": 207,
        "end": 221,
        "left": {
          "type": "Identifier",
          "start": 207,
          "end": 208,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": ">=",
        "right": {
          "type": "TSTypeAssertion",
          "start": 212,
          "end": 221,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 213,
            "end": 219
          },
          "expression": {
            "type": "Literal",
            "start": 220,
            "end": 221,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 223,
      "end": 242,
      "expression": {
        "type": "BinaryExpression",
        "start": 223,
        "end": 241,
        "left": {
          "type": "Identifier",
          "start": 223,
          "end": 224,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": ">=",
        "right": {
          "type": "TSTypeAssertion",
          "start": 228,
          "end": 241,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 229,
            "end": 239,
            "typeName": {
              "type": "Identifier",
              "start": 229,
              "end": 239,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "Literal",
            "start": 240,
            "end": 241,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 259,
      "end": 266,
      "expression": {
        "type": "BinaryExpression",
        "start": 259,
        "end": 265,
        "left": {
          "type": "Identifier",
          "start": 259,
          "end": 260,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<=",
        "right": {
          "type": "Literal",
          "start": 264,
          "end": 265,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 267,
      "end": 282,
      "expression": {
        "type": "BinaryExpression",
        "start": 267,
        "end": 281,
        "left": {
          "type": "Identifier",
          "start": 267,
          "end": 268,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<=",
        "right": {
          "type": "TSTypeAssertion",
          "start": 272,
          "end": 281,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 273,
            "end": 279
          },
          "expression": {
            "type": "Literal",
            "start": 280,
            "end": 281,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 283,
      "end": 302,
      "expression": {
        "type": "BinaryExpression",
        "start": 283,
        "end": 301,
        "left": {
          "type": "Identifier",
          "start": 283,
          "end": 284,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<=",
        "right": {
          "type": "TSTypeAssertion",
          "start": 288,
          "end": 301,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 289,
            "end": 299,
            "typeName": {
              "type": "Identifier",
              "start": 289,
              "end": 299,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "Literal",
            "start": 300,
            "end": 301,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 326,
      "expression": {
        "type": "BinaryExpression",
        "start": 319,
        "end": 325,
        "left": {
          "type": "Identifier",
          "start": 319,
          "end": 320,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 324,
          "end": 325,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 327,
      "end": 342,
      "expression": {
        "type": "BinaryExpression",
        "start": 327,
        "end": 341,
        "left": {
          "type": "Identifier",
          "start": 327,
          "end": 328,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "TSTypeAssertion",
          "start": 332,
          "end": 341,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 333,
            "end": 339
          },
          "expression": {
            "type": "Literal",
            "start": 340,
            "end": 341,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 343,
      "end": 362,
      "expression": {
        "type": "BinaryExpression",
        "start": 343,
        "end": 361,
        "left": {
          "type": "Identifier",
          "start": 343,
          "end": 344,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "TSTypeAssertion",
          "start": 348,
          "end": 361,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 349,
            "end": 359,
            "typeName": {
              "type": "Identifier",
              "start": 349,
              "end": 359,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "Literal",
            "start": 360,
            "end": 361,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 386,
      "expression": {
        "type": "BinaryExpression",
        "start": 379,
        "end": 385,
        "left": {
          "type": "Identifier",
          "start": 379,
          "end": 380,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "start": 384,
          "end": 385,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 387,
      "end": 402,
      "expression": {
        "type": "BinaryExpression",
        "start": 387,
        "end": 401,
        "left": {
          "type": "Identifier",
          "start": 387,
          "end": 388,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!=",
        "right": {
          "type": "TSTypeAssertion",
          "start": 392,
          "end": 401,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 393,
            "end": 399
          },
          "expression": {
            "type": "Literal",
            "start": 400,
            "end": 401,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 403,
      "end": 422,
      "expression": {
        "type": "BinaryExpression",
        "start": 403,
        "end": 421,
        "left": {
          "type": "Identifier",
          "start": 403,
          "end": 404,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!=",
        "right": {
          "type": "TSTypeAssertion",
          "start": 408,
          "end": 421,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 409,
            "end": 419,
            "typeName": {
              "type": "Identifier",
              "start": 409,
              "end": 419,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "Literal",
            "start": 420,
            "end": 421,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 440,
      "end": 448,
      "expression": {
        "type": "BinaryExpression",
        "start": 440,
        "end": 447,
        "left": {
          "type": "Identifier",
          "start": 440,
          "end": 441,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 446,
          "end": 447,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 449,
      "end": 465,
      "expression": {
        "type": "BinaryExpression",
        "start": 449,
        "end": 464,
        "left": {
          "type": "Identifier",
          "start": 449,
          "end": 450,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "TSTypeAssertion",
          "start": 455,
          "end": 464,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 456,
            "end": 462
          },
          "expression": {
            "type": "Literal",
            "start": 463,
            "end": 464,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 466,
      "end": 486,
      "expression": {
        "type": "BinaryExpression",
        "start": 466,
        "end": 485,
        "left": {
          "type": "Identifier",
          "start": 466,
          "end": 467,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "TSTypeAssertion",
          "start": 472,
          "end": 485,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 473,
            "end": 483,
            "typeName": {
              "type": "Identifier",
              "start": 473,
              "end": 483,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "Literal",
            "start": 484,
            "end": 485,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 504,
      "end": 512,
      "expression": {
        "type": "BinaryExpression",
        "start": 504,
        "end": 511,
        "left": {
          "type": "Identifier",
          "start": 504,
          "end": 505,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 510,
          "end": 511,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 513,
      "end": 529,
      "expression": {
        "type": "BinaryExpression",
        "start": 513,
        "end": 528,
        "left": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "TSTypeAssertion",
          "start": 519,
          "end": 528,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 520,
            "end": 526
          },
          "expression": {
            "type": "Literal",
            "start": 527,
            "end": 528,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 530,
      "end": 550,
      "expression": {
        "type": "BinaryExpression",
        "start": 530,
        "end": 549,
        "left": {
          "type": "Identifier",
          "start": 530,
          "end": 531,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "TSTypeAssertion",
          "start": 536,
          "end": 549,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 537,
            "end": 547,
            "typeName": {
              "type": "Identifier",
              "start": 537,
              "end": 547,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "Literal",
            "start": 548,
            "end": 549,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
