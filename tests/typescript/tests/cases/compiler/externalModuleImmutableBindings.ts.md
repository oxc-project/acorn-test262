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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
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
              "value": 1,
              "raw": "1"
            },
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
      ],
      "source": {
        "type": "Literal",
        "start": 78,
        "end": 84,
        "value": "./f1",
        "raw": "'./f1'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 101,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 100,
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
            "value": "baz",
            "raw": "'baz'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 115,
      "expression": {
        "type": "AssignmentExpression",
        "start": 103,
        "end": 114,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 103,
          "end": 110,
          "object": {
            "type": "Identifier",
            "start": 103,
            "end": 108,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 113,
          "end": 114,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 131,
      "expression": {
        "type": "AssignmentExpression",
        "start": 116,
        "end": 130,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 116,
          "end": 126,
          "object": {
            "type": "Identifier",
            "start": 116,
            "end": 121,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 122,
            "end": 125,
            "value": "x",
            "raw": "'x'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 129,
          "end": 130,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 147,
      "expression": {
        "type": "AssignmentExpression",
        "start": 132,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 132,
          "end": 142,
          "object": {
            "type": "Identifier",
            "start": 132,
            "end": 137,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 142,
            "decorators": [],
            "name": "blah",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 145,
          "end": 146,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 161,
      "expression": {
        "type": "AssignmentExpression",
        "start": 148,
        "end": 160,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 148,
          "end": 156,
          "object": {
            "type": "Identifier",
            "start": 148,
            "end": 153,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 159,
          "end": 160,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 173,
      "expression": {
        "type": "UpdateExpression",
        "start": 163,
        "end": 172,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 163,
          "end": 170,
          "object": {
            "type": "Identifier",
            "start": 163,
            "end": 168,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 169,
            "end": 170,
            "decorators": [],
            "name": "x",
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
      "start": 174,
      "end": 187,
      "expression": {
        "type": "UpdateExpression",
        "start": 174,
        "end": 186,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 174,
          "end": 184,
          "object": {
            "type": "Identifier",
            "start": 174,
            "end": 179,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 180,
            "end": 183,
            "value": "x",
            "raw": "'x'"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 204,
      "expression": {
        "type": "UpdateExpression",
        "start": 188,
        "end": 203,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 188,
          "end": 201,
          "object": {
            "type": "Identifier",
            "start": 188,
            "end": 193,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 194,
            "end": 200,
            "value": "blah",
            "raw": "'blah'"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 216,
      "expression": {
        "type": "UpdateExpression",
        "start": 205,
        "end": 215,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 205,
          "end": 213,
          "object": {
            "type": "Identifier",
            "start": 205,
            "end": 210,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 218,
      "end": 232,
      "expression": {
        "type": "AssignmentExpression",
        "start": 218,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 219,
          "end": 226,
          "object": {
            "type": "Identifier",
            "start": 219,
            "end": 224,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 230,
          "end": 231,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 250,
      "expression": {
        "type": "AssignmentExpression",
        "start": 233,
        "end": 249,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 234,
          "end": 244,
          "object": {
            "type": "Identifier",
            "start": 234,
            "end": 239,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 240,
            "end": 243,
            "value": "x",
            "raw": "'x'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 248,
          "end": 249,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 268,
      "expression": {
        "type": "AssignmentExpression",
        "start": 251,
        "end": 267,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 252,
          "end": 262,
          "object": {
            "type": "Identifier",
            "start": 252,
            "end": 257,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 258,
            "end": 262,
            "decorators": [],
            "name": "blah",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 266,
          "end": 267,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 284,
      "expression": {
        "type": "AssignmentExpression",
        "start": 269,
        "end": 283,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 270,
          "end": 278,
          "object": {
            "type": "Identifier",
            "start": 270,
            "end": 275,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 282,
          "end": 283,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 298,
      "expression": {
        "type": "UpdateExpression",
        "start": 286,
        "end": 297,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 287,
          "end": 294,
          "object": {
            "type": "Identifier",
            "start": 287,
            "end": 292,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 293,
            "end": 294,
            "decorators": [],
            "name": "x",
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
      "start": 299,
      "end": 314,
      "expression": {
        "type": "UpdateExpression",
        "start": 299,
        "end": 313,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 300,
          "end": 310,
          "object": {
            "type": "Identifier",
            "start": 300,
            "end": 305,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 306,
            "end": 309,
            "value": "x",
            "raw": "'x'"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 333,
      "expression": {
        "type": "UpdateExpression",
        "start": 315,
        "end": 332,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 316,
          "end": 329,
          "object": {
            "type": "Identifier",
            "start": 316,
            "end": 321,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 322,
            "end": 328,
            "value": "blah",
            "raw": "'blah'"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 334,
      "end": 347,
      "expression": {
        "type": "UpdateExpression",
        "start": 334,
        "end": 346,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 335,
          "end": 343,
          "object": {
            "type": "Identifier",
            "start": 335,
            "end": 340,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ForInStatement",
      "start": 349,
      "end": 371,
      "left": {
        "type": "MemberExpression",
        "start": 354,
        "end": 361,
        "object": {
          "type": "Identifier",
          "start": 354,
          "end": 359,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 360,
          "end": 361,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 365,
        "end": 367,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 369,
        "end": 371,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 372,
      "end": 394,
      "await": false,
      "left": {
        "type": "MemberExpression",
        "start": 377,
        "end": 384,
        "object": {
          "type": "Identifier",
          "start": 377,
          "end": 382,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 383,
          "end": 384,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 388,
        "end": 390,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 392,
        "end": 394,
        "body": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 395,
      "end": 420,
      "left": {
        "type": "MemberExpression",
        "start": 400,
        "end": 410,
        "object": {
          "type": "Identifier",
          "start": 400,
          "end": 405,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 406,
          "end": 409,
          "value": "x",
          "raw": "'x'"
        },
        "optional": false,
        "computed": true
      },
      "right": {
        "type": "ArrayExpression",
        "start": 414,
        "end": 416,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 418,
        "end": 420,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 421,
      "end": 446,
      "await": false,
      "left": {
        "type": "MemberExpression",
        "start": 426,
        "end": 436,
        "object": {
          "type": "Identifier",
          "start": 426,
          "end": 431,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 432,
          "end": 435,
          "value": "x",
          "raw": "'x'"
        },
        "optional": false,
        "computed": true
      },
      "right": {
        "type": "ArrayExpression",
        "start": 440,
        "end": 442,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 444,
        "end": 446,
        "body": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 447,
      "end": 472,
      "left": {
        "type": "MemberExpression",
        "start": 452,
        "end": 462,
        "object": {
          "type": "Identifier",
          "start": 452,
          "end": 457,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 458,
          "end": 462,
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 466,
        "end": 468,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 470,
        "end": 472,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 473,
      "end": 498,
      "await": false,
      "left": {
        "type": "MemberExpression",
        "start": 478,
        "end": 488,
        "object": {
          "type": "Identifier",
          "start": 478,
          "end": 483,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 484,
          "end": 488,
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 492,
        "end": 494,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 496,
        "end": 498,
        "body": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 499,
      "end": 522,
      "left": {
        "type": "MemberExpression",
        "start": 504,
        "end": 512,
        "object": {
          "type": "Identifier",
          "start": 504,
          "end": 509,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 510,
          "end": 511,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "right": {
        "type": "ArrayExpression",
        "start": 516,
        "end": 518,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 520,
        "end": 522,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 523,
      "end": 546,
      "await": false,
      "left": {
        "type": "MemberExpression",
        "start": 528,
        "end": 536,
        "object": {
          "type": "Identifier",
          "start": 528,
          "end": 533,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 534,
          "end": 535,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "right": {
        "type": "ArrayExpression",
        "start": 540,
        "end": 542,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 544,
        "end": 546,
        "body": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 548,
      "end": 572,
      "left": {
        "type": "MemberExpression",
        "start": 554,
        "end": 561,
        "object": {
          "type": "Identifier",
          "start": 554,
          "end": 559,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 560,
          "end": 561,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 566,
        "end": 568,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 570,
        "end": 572,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 573,
      "end": 597,
      "await": false,
      "left": {
        "type": "MemberExpression",
        "start": 579,
        "end": 586,
        "object": {
          "type": "Identifier",
          "start": 579,
          "end": 584,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 585,
          "end": 586,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 591,
        "end": 593,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 595,
        "end": 597,
        "body": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 598,
      "end": 625,
      "left": {
        "type": "MemberExpression",
        "start": 604,
        "end": 614,
        "object": {
          "type": "Identifier",
          "start": 604,
          "end": 609,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 610,
          "end": 613,
          "value": "x",
          "raw": "'x'"
        },
        "optional": false,
        "computed": true
      },
      "right": {
        "type": "ArrayExpression",
        "start": 619,
        "end": 621,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 623,
        "end": 625,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 626,
      "end": 653,
      "await": false,
      "left": {
        "type": "MemberExpression",
        "start": 632,
        "end": 642,
        "object": {
          "type": "Identifier",
          "start": 632,
          "end": 637,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 638,
          "end": 641,
          "value": "x",
          "raw": "'x'"
        },
        "optional": false,
        "computed": true
      },
      "right": {
        "type": "ArrayExpression",
        "start": 647,
        "end": 649,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 651,
        "end": 653,
        "body": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 654,
      "end": 681,
      "left": {
        "type": "MemberExpression",
        "start": 660,
        "end": 670,
        "object": {
          "type": "Identifier",
          "start": 660,
          "end": 665,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 666,
          "end": 670,
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 675,
        "end": 677,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 679,
        "end": 681,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 682,
      "end": 709,
      "await": false,
      "left": {
        "type": "MemberExpression",
        "start": 688,
        "end": 698,
        "object": {
          "type": "Identifier",
          "start": 688,
          "end": 693,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 694,
          "end": 698,
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 703,
        "end": 705,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 707,
        "end": 709,
        "body": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 710,
      "end": 735,
      "left": {
        "type": "MemberExpression",
        "start": 716,
        "end": 724,
        "object": {
          "type": "Identifier",
          "start": 716,
          "end": 721,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 722,
          "end": 723,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "right": {
        "type": "ArrayExpression",
        "start": 729,
        "end": 731,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 733,
        "end": 735,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 736,
      "end": 761,
      "await": false,
      "left": {
        "type": "MemberExpression",
        "start": 742,
        "end": 750,
        "object": {
          "type": "Identifier",
          "start": 742,
          "end": 747,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 748,
          "end": 749,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "right": {
        "type": "ArrayExpression",
        "start": 755,
        "end": 757,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 759,
        "end": 761,
        "body": []
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
