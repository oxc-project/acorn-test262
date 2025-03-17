__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 708,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 12,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 11,
        "value": "./",
        "raw": "\"./\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 14,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 23,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 26,
        "end": 43,
        "expression": {
          "type": "Literal",
          "start": 34,
          "end": 42,
          "value": "./mod1",
          "raw": "\"./mod1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 55,
      "expression": {
        "type": "MemberExpression",
        "start": 46,
        "end": 54,
        "object": {
          "type": "Identifier",
          "start": 46,
          "end": 48,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 49,
          "end": 54,
          "name": "thing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 72,
      "expression": {
        "type": "MemberExpression",
        "start": 56,
        "end": 71,
        "object": {
          "type": "Identifier",
          "start": 56,
          "end": 58,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 59,
          "end": 71,
          "name": "readonlyProp",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 88,
      "expression": {
        "type": "MemberExpression",
        "start": 73,
        "end": 87,
        "object": {
          "type": "Identifier",
          "start": 73,
          "end": 75,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 76,
          "end": 87,
          "name": "rwAccessors",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 109,
      "expression": {
        "type": "MemberExpression",
        "start": 89,
        "end": 108,
        "object": {
          "type": "Identifier",
          "start": 89,
          "end": 91,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 92,
          "end": 108,
          "name": "readonlyAccessor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 129,
      "expression": {
        "type": "MemberExpression",
        "start": 110,
        "end": 128,
        "object": {
          "type": "Identifier",
          "start": 110,
          "end": 112,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 113,
          "end": 128,
          "name": "setonlyAccessor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 168,
      "expression": {
        "type": "AssignmentExpression",
        "start": 154,
        "end": 167,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 154,
          "end": 162,
          "object": {
            "type": "Identifier",
            "start": 154,
            "end": 156,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 157,
            "end": 162,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 165,
          "end": 167,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 189,
      "expression": {
        "type": "AssignmentExpression",
        "start": 169,
        "end": 188,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 169,
          "end": 183,
          "object": {
            "type": "Identifier",
            "start": 169,
            "end": 171,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 172,
            "end": 183,
            "name": "rwAccessors",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 186,
          "end": 188,
          "value": 11,
          "raw": "11"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 217,
      "expression": {
        "type": "AssignmentExpression",
        "start": 190,
        "end": 216,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 190,
          "end": 208,
          "object": {
            "type": "Identifier",
            "start": 190,
            "end": 192,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 193,
            "end": 208,
            "name": "setonlyAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 211,
          "end": 216,
          "value": "yes",
          "raw": "\"yes\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 245,
      "end": 270,
      "expression": {
        "type": "AssignmentExpression",
        "start": 245,
        "end": 269,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 245,
          "end": 260,
          "object": {
            "type": "Identifier",
            "start": 245,
            "end": 247,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 248,
            "end": 260,
            "name": "readonlyProp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 263,
          "end": 269,
          "value": "name",
          "raw": "\"name\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 296,
      "expression": {
        "type": "AssignmentExpression",
        "start": 271,
        "end": 295,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 271,
          "end": 290,
          "object": {
            "type": "Identifier",
            "start": 271,
            "end": 273,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 274,
            "end": 290,
            "name": "readonlyAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 293,
          "end": 295,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 297,
      "end": 313,
      "expression": {
        "type": "AssignmentExpression",
        "start": 297,
        "end": 312,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 297,
          "end": 305,
          "object": {
            "type": "Identifier",
            "start": 297,
            "end": 299,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 300,
            "end": 305,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 308,
          "end": 312,
          "value": "no",
          "raw": "\"no\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 314,
      "end": 336,
      "expression": {
        "type": "AssignmentExpression",
        "start": 314,
        "end": 335,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 314,
          "end": 328,
          "object": {
            "type": "Identifier",
            "start": 314,
            "end": 316,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 317,
            "end": 328,
            "name": "rwAccessors",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 331,
          "end": 335,
          "value": "no",
          "raw": "\"no\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 337,
      "end": 360,
      "expression": {
        "type": "AssignmentExpression",
        "start": 337,
        "end": 359,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 337,
          "end": 355,
          "object": {
            "type": "Identifier",
            "start": 337,
            "end": 339,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 340,
            "end": 355,
            "name": "setonlyAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 358,
          "end": 359,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 362,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 371,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 374,
        "end": 391,
        "expression": {
          "type": "Literal",
          "start": 382,
          "end": 390,
          "value": "./mod2",
          "raw": "\"./mod2\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 394,
      "end": 403,
      "expression": {
        "type": "MemberExpression",
        "start": 394,
        "end": 402,
        "object": {
          "type": "Identifier",
          "start": 394,
          "end": 396,
          "name": "m2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 397,
          "end": 402,
          "name": "thing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 404,
      "end": 420,
      "expression": {
        "type": "MemberExpression",
        "start": 404,
        "end": 419,
        "object": {
          "type": "Identifier",
          "start": 404,
          "end": 406,
          "name": "m2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 407,
          "end": 419,
          "name": "readonlyProp",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 421,
      "end": 436,
      "expression": {
        "type": "MemberExpression",
        "start": 421,
        "end": 435,
        "object": {
          "type": "Identifier",
          "start": 421,
          "end": 423,
          "name": "m2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 424,
          "end": 435,
          "name": "rwAccessors",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 437,
      "end": 457,
      "expression": {
        "type": "MemberExpression",
        "start": 437,
        "end": 456,
        "object": {
          "type": "Identifier",
          "start": 437,
          "end": 439,
          "name": "m2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 440,
          "end": 456,
          "name": "readonlyAccessor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 458,
      "end": 477,
      "expression": {
        "type": "MemberExpression",
        "start": 458,
        "end": 476,
        "object": {
          "type": "Identifier",
          "start": 458,
          "end": 460,
          "name": "m2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 461,
          "end": 476,
          "name": "setonlyAccessor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 502,
      "end": 518,
      "expression": {
        "type": "AssignmentExpression",
        "start": 502,
        "end": 517,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 502,
          "end": 510,
          "object": {
            "type": "Identifier",
            "start": 502,
            "end": 504,
            "name": "m2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 505,
            "end": 510,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 513,
          "end": 517,
          "value": "ok",
          "raw": "\"ok\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 519,
      "end": 539,
      "expression": {
        "type": "AssignmentExpression",
        "start": 519,
        "end": 538,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 519,
          "end": 533,
          "object": {
            "type": "Identifier",
            "start": 519,
            "end": 521,
            "name": "m2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 522,
            "end": 533,
            "name": "rwAccessors",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 536,
          "end": 538,
          "value": 11,
          "raw": "11"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 540,
      "end": 567,
      "expression": {
        "type": "AssignmentExpression",
        "start": 540,
        "end": 566,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 540,
          "end": 558,
          "object": {
            "type": "Identifier",
            "start": 540,
            "end": 542,
            "name": "m2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 543,
            "end": 558,
            "name": "setonlyAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 561,
          "end": 566,
          "value": "yes",
          "raw": "\"yes\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 595,
      "end": 620,
      "expression": {
        "type": "AssignmentExpression",
        "start": 595,
        "end": 619,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 595,
          "end": 610,
          "object": {
            "type": "Identifier",
            "start": 595,
            "end": 597,
            "name": "m2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 598,
            "end": 610,
            "name": "readonlyProp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 613,
          "end": 619,
          "value": "name",
          "raw": "\"name\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 621,
      "end": 646,
      "expression": {
        "type": "AssignmentExpression",
        "start": 621,
        "end": 645,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 621,
          "end": 640,
          "object": {
            "type": "Identifier",
            "start": 621,
            "end": 623,
            "name": "m2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 624,
            "end": 640,
            "name": "readonlyAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 643,
          "end": 645,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 647,
      "end": 660,
      "expression": {
        "type": "AssignmentExpression",
        "start": 647,
        "end": 659,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 647,
          "end": 655,
          "object": {
            "type": "Identifier",
            "start": 647,
            "end": 649,
            "name": "m2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 650,
            "end": 655,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 658,
          "end": 659,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 661,
      "end": 683,
      "expression": {
        "type": "AssignmentExpression",
        "start": 661,
        "end": 682,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 661,
          "end": 675,
          "object": {
            "type": "Identifier",
            "start": 661,
            "end": 663,
            "name": "m2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 664,
            "end": 675,
            "name": "rwAccessors",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 678,
          "end": 682,
          "value": "no",
          "raw": "\"no\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 684,
      "end": 707,
      "expression": {
        "type": "AssignmentExpression",
        "start": 684,
        "end": 706,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 684,
          "end": 702,
          "object": {
            "type": "Identifier",
            "start": 684,
            "end": 686,
            "name": "m2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 687,
            "end": 702,
            "name": "setonlyAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 705,
          "end": 706,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
