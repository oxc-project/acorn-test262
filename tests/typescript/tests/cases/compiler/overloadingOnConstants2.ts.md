__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 624,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 27,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 50,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 50,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 81,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 81,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 79,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 77,
              "end": 78,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 82,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 94,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 95,
          "end": 102,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 102,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 98,
              "end": 102,
              "literal": {
                "type": "Literal",
                "start": 98,
                "end": 102,
                "value": "hi",
                "raw": "\"hi\""
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 104,
          "end": 119,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 109,
            "end": 119,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 111,
              "end": 119,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 111,
                "end": 117
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 123,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 122,
          "end": 123,
          "typeName": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 125,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 137,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 138,
          "end": 146,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 139,
            "end": 146,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 141,
              "end": 146,
              "literal": {
                "type": "Literal",
                "start": 141,
                "end": 146,
                "value": "bye",
                "raw": "\"bye\""
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 148,
          "end": 163,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 153,
            "end": 163,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 155,
              "end": 163,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 155,
                "end": 161
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 164,
        "end": 167,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 166,
          "end": 167,
          "typeName": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 181,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 182,
          "end": 191,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 191,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 185,
              "end": 191
            }
          }
        },
        {
          "type": "Identifier",
          "start": 193,
          "end": 208,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 208,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 200,
              "end": 208,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 209,
        "end": 212,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 211,
          "end": 212,
          "typeName": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 213,
        "end": 232,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 218,
            "end": 230,
            "argument": {
              "type": "Literal",
              "start": 225,
              "end": 229,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 258,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 241,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 241,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 240,
                "end": 241,
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 241,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 244,
            "end": 257,
            "callee": {
              "type": "Identifier",
              "start": 244,
              "end": 247,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 248,
                "end": 252,
                "value": "hi",
                "raw": "\"hi\""
              },
              {
                "type": "ArrayExpression",
                "start": 254,
                "end": 256,
                "elements": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 290,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 289,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 272,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 272,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 271,
                "end": 272,
                "typeName": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 275,
            "end": 289,
            "callee": {
              "type": "Identifier",
              "start": 275,
              "end": 278,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 279,
                "end": 284,
                "value": "bye",
                "raw": "\"bye\""
              },
              {
                "type": "ArrayExpression",
                "start": 286,
                "end": 288,
                "elements": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 319,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 302,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 305,
            "end": 318,
            "callee": {
              "type": "Identifier",
              "start": 305,
              "end": 308,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 309,
                "end": 313,
                "value": "um",
                "raw": "\"um\""
              },
              {
                "type": "ArrayExpression",
                "start": 315,
                "end": 317,
                "elements": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 376,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 388,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 389,
          "end": 397,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 390,
            "end": 397,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 392,
              "end": 397,
              "literal": {
                "type": "Literal",
                "start": 392,
                "end": 397,
                "value": "bye",
                "raw": "\"bye\""
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 399,
          "end": 414,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 404,
            "end": 414,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 406,
              "end": 414,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 406,
                "end": 412
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 415,
        "end": 418,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 417,
          "end": 418,
          "typeName": {
            "type": "Identifier",
            "start": 417,
            "end": 418,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 420,
      "end": 464,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 432,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 433,
          "end": 442,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 434,
            "end": 442,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 436,
              "end": 442
            }
          }
        },
        {
          "type": "Identifier",
          "start": 444,
          "end": 459,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 449,
            "end": 459,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 451,
              "end": 459,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 451,
                "end": 457
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 460,
        "end": 463,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 462,
          "end": 463,
          "typeName": {
            "type": "Identifier",
            "start": 462,
            "end": 463,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 465,
      "end": 528,
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 477,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 478,
          "end": 487,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 479,
            "end": 487,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 481,
              "end": 487
            }
          }
        },
        {
          "type": "Identifier",
          "start": 489,
          "end": 504,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 494,
            "end": 504,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 496,
              "end": 504,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 496,
                "end": 502
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 505,
        "end": 508,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 507,
          "end": 508,
          "typeName": {
            "type": "Identifier",
            "start": 507,
            "end": 508,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 509,
        "end": 528,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 514,
            "end": 526,
            "argument": {
              "type": "Literal",
              "start": 521,
              "end": 525,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 530,
      "end": 555,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 534,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 534,
            "end": 538,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 535,
              "end": 538,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 537,
                "end": 538,
                "typeName": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 538,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 541,
            "end": 554,
            "callee": {
              "type": "Identifier",
              "start": 541,
              "end": 544,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 545,
                "end": 549,
                "value": "hi",
                "raw": "\"hi\""
              },
              {
                "type": "ArrayExpression",
                "start": 551,
                "end": 553,
                "elements": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 561,
      "end": 587,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 565,
          "end": 586,
          "id": {
            "type": "Identifier",
            "start": 565,
            "end": 569,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 566,
              "end": 569,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 568,
                "end": 569,
                "typeName": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 569,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 572,
            "end": 586,
            "callee": {
              "type": "Identifier",
              "start": 572,
              "end": 575,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 576,
                "end": 581,
                "value": "bye",
                "raw": "\"bye\""
              },
              {
                "type": "ArrayExpression",
                "start": 583,
                "end": 585,
                "elements": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 594,
      "end": 619,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 598,
          "end": 618,
          "id": {
            "type": "Identifier",
            "start": 598,
            "end": 602,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 599,
              "end": 602,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 601,
                "end": 602,
                "typeName": {
                  "type": "Identifier",
                  "start": 601,
                  "end": 602,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 605,
            "end": 618,
            "callee": {
              "type": "Identifier",
              "start": 605,
              "end": 608,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 609,
                "end": 613,
                "value": "um",
                "raw": "\"um\""
              },
              {
                "type": "ArrayExpression",
                "start": 615,
                "end": 617,
                "elements": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
