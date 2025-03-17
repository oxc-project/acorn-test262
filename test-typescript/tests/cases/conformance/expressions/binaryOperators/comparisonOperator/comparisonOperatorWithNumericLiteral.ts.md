__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 551,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 50,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "BrandedNum",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 42,
                  "decorators": [],
                  "name": "__numberBrand",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 44,
                    "end": 47
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 69,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 69,
                  "decorators": [],
                  "name": "BrandedNum",
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
      "type": "ExpressionStatement",
      "start": 86,
      "end": 92,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 86,
        "end": 91,
        "operator": ">",
        "left": {
          "type": "Identifier",
          "start": 86,
          "end": 87,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 90,
          "end": 91,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 93,
      "end": 107,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 93,
        "end": 106,
        "operator": ">",
        "left": {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 97,
          "end": 106,
          "expression": {
            "type": "Literal",
            "start": 105,
            "end": 106,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 98,
            "end": 104
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 126,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 108,
        "end": 125,
        "operator": ">",
        "left": {
          "type": "Identifier",
          "start": 108,
          "end": 109,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 112,
          "end": 125,
          "expression": {
            "type": "Literal",
            "start": 124,
            "end": 125,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 113,
            "end": 123,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 113,
              "end": 123,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 148,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 142,
        "end": 147,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 146,
          "end": 147,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 163,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 149,
        "end": 162,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 149,
          "end": 150,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 153,
          "end": 162,
          "expression": {
            "type": "Literal",
            "start": 161,
            "end": 162,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 154,
            "end": 160
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 182,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 164,
        "end": 181,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 164,
          "end": 165,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 168,
          "end": 181,
          "expression": {
            "type": "Literal",
            "start": 180,
            "end": 181,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 169,
            "end": 179,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 169,
              "end": 179,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 206,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 199,
        "end": 205,
        "operator": ">=",
        "left": {
          "type": "Identifier",
          "start": 199,
          "end": 200,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 204,
          "end": 205,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 207,
      "end": 222,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 207,
        "end": 221,
        "operator": ">=",
        "left": {
          "type": "Identifier",
          "start": 207,
          "end": 208,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 212,
          "end": 221,
          "expression": {
            "type": "Literal",
            "start": 220,
            "end": 221,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 213,
            "end": 219
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 223,
      "end": 242,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 223,
        "end": 241,
        "operator": ">=",
        "left": {
          "type": "Identifier",
          "start": 223,
          "end": 224,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 228,
          "end": 241,
          "expression": {
            "type": "Literal",
            "start": 240,
            "end": 241,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 229,
            "end": 239,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 229,
              "end": 239,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 259,
      "end": 266,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 259,
        "end": 265,
        "operator": "<=",
        "left": {
          "type": "Identifier",
          "start": 259,
          "end": 260,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 264,
          "end": 265,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 267,
      "end": 282,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 267,
        "end": 281,
        "operator": "<=",
        "left": {
          "type": "Identifier",
          "start": 267,
          "end": 268,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 272,
          "end": 281,
          "expression": {
            "type": "Literal",
            "start": 280,
            "end": 281,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 273,
            "end": 279
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 283,
      "end": 302,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 283,
        "end": 301,
        "operator": "<=",
        "left": {
          "type": "Identifier",
          "start": 283,
          "end": 284,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 288,
          "end": 301,
          "expression": {
            "type": "Literal",
            "start": 300,
            "end": 301,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 289,
            "end": 299,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 289,
              "end": 299,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 326,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 319,
        "end": 325,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 319,
          "end": 320,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 324,
          "end": 325,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 327,
      "end": 342,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 327,
        "end": 341,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 327,
          "end": 328,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 332,
          "end": 341,
          "expression": {
            "type": "Literal",
            "start": 340,
            "end": 341,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 333,
            "end": 339
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 343,
      "end": 362,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 343,
        "end": 361,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 343,
          "end": 344,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 348,
          "end": 361,
          "expression": {
            "type": "Literal",
            "start": 360,
            "end": 361,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 349,
            "end": 359,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 349,
              "end": 359,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 386,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 379,
        "end": 385,
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "start": 379,
          "end": 380,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 384,
          "end": 385,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 387,
      "end": 402,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 387,
        "end": 401,
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "start": 387,
          "end": 388,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 392,
          "end": 401,
          "expression": {
            "type": "Literal",
            "start": 400,
            "end": 401,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 393,
            "end": 399
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 403,
      "end": 422,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 403,
        "end": 421,
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "start": 403,
          "end": 404,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 408,
          "end": 421,
          "expression": {
            "type": "Literal",
            "start": 420,
            "end": 421,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 409,
            "end": 419,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 409,
              "end": 419,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 440,
      "end": 448,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 440,
        "end": 447,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 440,
          "end": 441,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 446,
          "end": 447,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 449,
      "end": 465,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 449,
        "end": 464,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 449,
          "end": 450,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 455,
          "end": 464,
          "expression": {
            "type": "Literal",
            "start": 463,
            "end": 464,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 456,
            "end": 462
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 466,
      "end": 486,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 466,
        "end": 485,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 466,
          "end": 467,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 472,
          "end": 485,
          "expression": {
            "type": "Literal",
            "start": 484,
            "end": 485,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 473,
            "end": 483,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 473,
              "end": 483,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 504,
      "end": 512,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 504,
        "end": 511,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 504,
          "end": 505,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 510,
          "end": 511,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 513,
      "end": 529,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 513,
        "end": 528,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 519,
          "end": 528,
          "expression": {
            "type": "Literal",
            "start": 527,
            "end": 528,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 520,
            "end": 526
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 530,
      "end": 550,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 530,
        "end": 549,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 530,
          "end": 531,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 536,
          "end": 549,
          "expression": {
            "type": "Literal",
            "start": 548,
            "end": 549,
            "raw": "0",
            "value": 0
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 537,
            "end": 547,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 537,
              "end": 547,
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
