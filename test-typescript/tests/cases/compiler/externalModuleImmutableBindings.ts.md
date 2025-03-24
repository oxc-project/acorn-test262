__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 55,
  "end": 763,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 55,
      "end": 85,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 78,
        "end": 84,
        "raw": "'./f1'",
        "value": "./f1"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 62,
          "end": 72,
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 72,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 100,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 95,
            "end": 100,
            "raw": "'baz'",
            "value": "baz"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 115,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 103,
        "end": 114,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 103,
          "end": 110,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 103,
            "end": 108,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 113,
          "end": 114,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 131,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 116,
        "end": 130,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 116,
          "end": 126,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 116,
            "end": 121,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 122,
            "end": 125,
            "raw": "'x'",
            "value": "x"
          }
        },
        "right": {
          "type": "Literal",
          "start": 129,
          "end": 130,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 147,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 132,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 132,
          "end": 142,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 132,
            "end": 137,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 142,
            "decorators": [],
            "name": "blah",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 145,
          "end": 146,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 161,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 148,
        "end": 160,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 148,
          "end": 156,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 148,
            "end": 153,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 159,
          "end": 160,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 173,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 163,
        "end": 172,
        "argument": {
          "type": "MemberExpression",
          "start": 163,
          "end": 170,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 163,
            "end": 168,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 169,
            "end": 170,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 187,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 174,
        "end": 186,
        "argument": {
          "type": "MemberExpression",
          "start": 174,
          "end": 184,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 174,
            "end": 179,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 180,
            "end": 183,
            "raw": "'x'",
            "value": "x"
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 204,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 188,
        "end": 203,
        "argument": {
          "type": "MemberExpression",
          "start": 188,
          "end": 201,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 188,
            "end": 193,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 194,
            "end": 200,
            "raw": "'blah'",
            "value": "blah"
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 216,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 205,
        "end": 215,
        "argument": {
          "type": "MemberExpression",
          "start": 205,
          "end": 213,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 205,
            "end": 210,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 218,
      "end": 232,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 218,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 219,
          "end": 226,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 219,
            "end": 224,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 230,
          "end": 231,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 250,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 233,
        "end": 249,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 234,
          "end": 244,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 234,
            "end": 239,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 240,
            "end": 243,
            "raw": "'x'",
            "value": "x"
          }
        },
        "right": {
          "type": "Literal",
          "start": 248,
          "end": 249,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 268,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 251,
        "end": 267,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 252,
          "end": 262,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 252,
            "end": 257,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 258,
            "end": 262,
            "decorators": [],
            "name": "blah",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 266,
          "end": 267,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 284,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 269,
        "end": 283,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 270,
          "end": 278,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 270,
            "end": 275,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 282,
          "end": 283,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 298,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 286,
        "end": 297,
        "argument": {
          "type": "MemberExpression",
          "start": 287,
          "end": 294,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 287,
            "end": 292,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 293,
            "end": 294,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 299,
      "end": 314,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 299,
        "end": 313,
        "argument": {
          "type": "MemberExpression",
          "start": 300,
          "end": 310,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 300,
            "end": 305,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 306,
            "end": 309,
            "raw": "'x'",
            "value": "x"
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 333,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 315,
        "end": 332,
        "argument": {
          "type": "MemberExpression",
          "start": 316,
          "end": 329,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 316,
            "end": 321,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 322,
            "end": 328,
            "raw": "'blah'",
            "value": "blah"
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 334,
      "end": 347,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 334,
        "end": 346,
        "argument": {
          "type": "MemberExpression",
          "start": 335,
          "end": 343,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 335,
            "end": 340,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForInStatement",
      "start": 349,
      "end": 371,
      "body": {
        "type": "BlockStatement",
        "start": 369,
        "end": 371,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 354,
        "end": 361,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 354,
          "end": 359,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 360,
          "end": 361,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 365,
        "end": 367,
        "elements": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 372,
      "end": 394,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 392,
        "end": 394,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 377,
        "end": 384,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 377,
          "end": 382,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 383,
          "end": 384,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 388,
        "end": 390,
        "elements": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 395,
      "end": 420,
      "body": {
        "type": "BlockStatement",
        "start": 418,
        "end": 420,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 400,
        "end": 410,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 400,
          "end": 405,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 406,
          "end": 409,
          "raw": "'x'",
          "value": "x"
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 414,
        "end": 416,
        "elements": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 421,
      "end": 446,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 444,
        "end": 446,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 426,
        "end": 436,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 426,
          "end": 431,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 432,
          "end": 435,
          "raw": "'x'",
          "value": "x"
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 440,
        "end": 442,
        "elements": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 447,
      "end": 472,
      "body": {
        "type": "BlockStatement",
        "start": 470,
        "end": 472,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 452,
        "end": 462,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 452,
          "end": 457,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 458,
          "end": 462,
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 466,
        "end": 468,
        "elements": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 473,
      "end": 498,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 496,
        "end": 498,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 478,
        "end": 488,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 478,
          "end": 483,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 484,
          "end": 488,
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 492,
        "end": 494,
        "elements": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 499,
      "end": 522,
      "body": {
        "type": "BlockStatement",
        "start": 520,
        "end": 522,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 504,
        "end": 512,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 504,
          "end": 509,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 510,
          "end": 511,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 516,
        "end": 518,
        "elements": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 523,
      "end": 546,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 544,
        "end": 546,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 528,
        "end": 536,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 528,
          "end": 533,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 534,
          "end": 535,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 540,
        "end": 542,
        "elements": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 548,
      "end": 572,
      "body": {
        "type": "BlockStatement",
        "start": 570,
        "end": 572,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 554,
        "end": 561,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 554,
          "end": 559,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 560,
          "end": 561,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 566,
        "end": 568,
        "elements": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 573,
      "end": 597,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 595,
        "end": 597,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 579,
        "end": 586,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 579,
          "end": 584,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 585,
          "end": 586,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 591,
        "end": 593,
        "elements": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 598,
      "end": 625,
      "body": {
        "type": "BlockStatement",
        "start": 623,
        "end": 625,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 604,
        "end": 614,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 604,
          "end": 609,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 610,
          "end": 613,
          "raw": "'x'",
          "value": "x"
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 619,
        "end": 621,
        "elements": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 626,
      "end": 653,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 651,
        "end": 653,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 632,
        "end": 642,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 632,
          "end": 637,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 638,
          "end": 641,
          "raw": "'x'",
          "value": "x"
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 647,
        "end": 649,
        "elements": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 654,
      "end": 681,
      "body": {
        "type": "BlockStatement",
        "start": 679,
        "end": 681,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 660,
        "end": 670,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 660,
          "end": 665,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 666,
          "end": 670,
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 675,
        "end": 677,
        "elements": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 682,
      "end": 709,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 707,
        "end": 709,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 688,
        "end": 698,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 688,
          "end": 693,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 694,
          "end": 698,
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 703,
        "end": 705,
        "elements": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 710,
      "end": 735,
      "body": {
        "type": "BlockStatement",
        "start": 733,
        "end": 735,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 716,
        "end": 724,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 716,
          "end": 721,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 722,
          "end": 723,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 729,
        "end": 731,
        "elements": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 736,
      "end": 761,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 759,
        "end": 761,
        "body": []
      },
      "left": {
        "type": "MemberExpression",
        "start": 742,
        "end": 750,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 742,
          "end": 747,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 748,
          "end": 749,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 755,
        "end": 757,
        "elements": []
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
