__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 582,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 49,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 48,
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
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
      "type": "VariableDeclaration",
      "start": 50,
      "end": 81,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 71,
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 71,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 63,
                "end": 71,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 63,
                  "end": 69
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 74,
            "end": 80,
            "elements": [
              {
                "type": "Literal",
                "start": 75,
                "end": 76,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 78,
                "end": 79,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 116,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 91,
        "end": 116,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 97,
            "end": 114,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 107,
                "end": 113
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 117,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 125,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 126,
        "end": 155,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 132,
            "end": 153,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 139,
              "end": 153,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 143,
                  "end": 152,
                  "id": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 152,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 144,
                      "end": 152,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 146,
                        "end": 152
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 157,
      "end": 176,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 165,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 168,
            "end": 175,
            "callee": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 228,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 227,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 216,
            "decorators": [],
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 219,
            "end": 227,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 221,
              "end": 227,
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 261,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 249,
            "decorators": [],
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 252,
            "end": 260,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 252,
              "end": 258,
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 309,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 308,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 297,
            "decorators": [],
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 300,
            "end": 308,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 302,
              "end": 308,
              "object": {
                "type": "Identifier",
                "start": 302,
                "end": 306,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 307,
                "end": 308,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 310,
      "end": 338,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 329,
            "decorators": [],
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 332,
            "end": 337,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 334,
              "end": 337,
              "object": {
                "type": "Identifier",
                "start": 334,
                "end": 335,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 336,
                "end": 337,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 340,
      "end": 371,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 370,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 359,
            "decorators": [],
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 362,
            "end": 370,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 362,
              "end": 368,
              "object": {
                "type": "Identifier",
                "start": 362,
                "end": 366,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 367,
                "end": 368,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 372,
      "end": 400,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 391,
            "decorators": [],
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 394,
            "end": 399,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 394,
              "end": 397,
              "object": {
                "type": "Identifier",
                "start": 394,
                "end": 395,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 396,
                "end": 397,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 436,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 435,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 420,
            "decorators": [],
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 423,
            "end": 435,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 423,
              "end": 433,
              "object": {
                "type": "Identifier",
                "start": 423,
                "end": 430,
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 431,
                "end": 432,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 467,
      "end": 476,
      "expression": {
        "type": "UpdateExpression",
        "start": 467,
        "end": 475,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 469,
          "end": 475,
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 491,
      "expression": {
        "type": "UpdateExpression",
        "start": 478,
        "end": 490,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 480,
          "end": 490,
          "object": {
            "type": "Identifier",
            "start": 480,
            "end": 487,
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 488,
            "end": 489,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 492,
      "end": 501,
      "expression": {
        "type": "UpdateExpression",
        "start": 492,
        "end": 500,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 494,
          "end": 500,
          "object": {
            "type": "Identifier",
            "start": 494,
            "end": 498,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 499,
            "end": 500,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 502,
      "end": 508,
      "expression": {
        "type": "UpdateExpression",
        "start": 502,
        "end": 507,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 504,
          "end": 507,
          "object": {
            "type": "Identifier",
            "start": 504,
            "end": 505,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 506,
            "end": 507,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 509,
      "end": 523,
      "expression": {
        "type": "SequenceExpression",
        "start": 509,
        "end": 522,
        "expressions": [
          {
            "type": "UpdateExpression",
            "start": 509,
            "end": 517,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 511,
              "end": 517,
              "object": {
                "type": "Identifier",
                "start": 511,
                "end": 515,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 516,
                "end": 517,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          {
            "type": "MemberExpression",
            "start": 519,
            "end": 522,
            "object": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 525,
      "end": 534,
      "expression": {
        "type": "UpdateExpression",
        "start": 525,
        "end": 533,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 525,
          "end": 531,
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 535,
      "end": 548,
      "expression": {
        "type": "UpdateExpression",
        "start": 535,
        "end": 547,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 535,
          "end": 545,
          "object": {
            "type": "Identifier",
            "start": 535,
            "end": 542,
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 543,
            "end": 544,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 549,
      "end": 558,
      "expression": {
        "type": "UpdateExpression",
        "start": 549,
        "end": 557,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 549,
          "end": 555,
          "object": {
            "type": "Identifier",
            "start": 549,
            "end": 553,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 554,
            "end": 555,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 559,
      "end": 565,
      "expression": {
        "type": "UpdateExpression",
        "start": 559,
        "end": 564,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 559,
          "end": 562,
          "object": {
            "type": "Identifier",
            "start": 559,
            "end": 560,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 561,
            "end": 562,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 566,
      "end": 582,
      "expression": {
        "type": "SequenceExpression",
        "start": 566,
        "end": 581,
        "expressions": [
          {
            "type": "UpdateExpression",
            "start": 566,
            "end": 574,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 566,
              "end": 572,
              "object": {
                "type": "Identifier",
                "start": 566,
                "end": 570,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 571,
                "end": 572,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          {
            "type": "UpdateExpression",
            "start": 576,
            "end": 581,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 576,
              "end": 579,
              "object": {
                "type": "Identifier",
                "start": 576,
                "end": 577,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 578,
                "end": 579,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
