__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 11,
        "end": 17
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tuple1",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 33,
                      "end": 34
                    },
                    "typeArguments": null,
                    "start": 33,
                    "end": 34
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 36,
                      "end": 37
                    },
                    "typeArguments": null,
                    "start": 36,
                    "end": 37
                  }
                ],
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 24,
            "end": 39
          }
        ],
        "start": 18,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 53
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 54,
                      "end": 60
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 62,
                      "end": 68
                    }
                  ],
                  "start": 53,
                  "end": 69
                },
                "start": 52,
                "end": 69
              },
              "start": 50,
              "end": 69
            },
            "start": 48,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 48,
          "end": 69
        }
      ],
      "declare": false,
      "start": 44,
      "end": 70
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 80
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 81,
                      "end": 83
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 85,
                      "end": 87
                    }
                  ],
                  "start": 80,
                  "end": 88
                },
                "start": 79,
                "end": 88
              },
              "start": 77,
              "end": 88
            },
            "start": 75,
            "end": 88
          },
          "init": null,
          "definite": false,
          "start": 75,
          "end": 88
        }
      ],
      "declare": false,
      "start": 71,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 105
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 112
          },
          "optional": false,
          "computed": false,
          "start": 103,
          "end": 112
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 116,
              "end": 121
            },
            {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 123,
              "end": 124
            }
          ],
          "start": 115,
          "end": 125
        },
        "start": 103,
        "end": 125
      },
      "directive": null,
      "start": 103,
      "end": 126
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 133
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 138
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 145
              },
              "optional": false,
              "computed": false,
              "start": 136,
              "end": 145
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 146,
              "end": 147
            },
            "optional": false,
            "computed": true,
            "start": 136,
            "end": 148
          },
          "definite": false,
          "start": 131,
          "end": 148
        }
      ],
      "declare": false,
      "start": 127,
      "end": 149
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 167
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 172
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 179
              },
              "optional": false,
              "computed": false,
              "start": 170,
              "end": 179
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 180,
              "end": 181
            },
            "optional": false,
            "computed": true,
            "start": 170,
            "end": 182
          },
          "definite": false,
          "start": 165,
          "end": 182
        }
      ],
      "declare": false,
      "start": 161,
      "end": 183
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 197
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 204
          },
          "optional": false,
          "computed": false,
          "start": 195,
          "end": 204
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 208,
              "end": 213
            },
            {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 215,
              "end": 216
            },
            {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 218,
              "end": 223
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 225,
              "end": 229
            }
          ],
          "start": 207,
          "end": 230
        },
        "start": 195,
        "end": 230
      },
      "directive": null,
      "start": 195,
      "end": 231
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e3",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 238
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 243
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null,
                "start": 244,
                "end": 250
              },
              "optional": false,
              "computed": false,
              "start": 241,
              "end": 250
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 251,
              "end": 252
            },
            "optional": false,
            "computed": true,
            "start": 241,
            "end": 253
          },
          "definite": false,
          "start": 236,
          "end": 253
        }
      ],
      "declare": false,
      "start": 232,
      "end": 254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 264
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "tuple1",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 271
            },
            "optional": false,
            "computed": false,
            "start": 262,
            "end": 271
          },
          "property": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 272,
            "end": 273
          },
          "optional": false,
          "computed": true,
          "start": 262,
          "end": 274
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 280
              },
              "value": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 282,
                "end": 290
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 279,
              "end": 290
            }
          ],
          "start": 277,
          "end": 292
        },
        "start": 262,
        "end": 292
      },
      "directive": null,
      "start": 262,
      "end": 293
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e4",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 300
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 305
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 312
              },
              "optional": false,
              "computed": false,
              "start": 303,
              "end": 312
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 313,
              "end": 314
            },
            "optional": false,
            "computed": true,
            "start": 303,
            "end": 315
          },
          "definite": false,
          "start": 298,
          "end": 315
        }
      ],
      "declare": false,
      "start": 294,
      "end": 316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 326
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 333
          },
          "optional": false,
          "computed": false,
          "start": 324,
          "end": 333
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 337,
              "end": 342
            },
            {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 344,
              "end": 345
            }
          ],
          "start": 336,
          "end": 346
        },
        "start": 324,
        "end": 346
      },
      "directive": null,
      "start": 324,
      "end": 347
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 350
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 357
          },
          "optional": false,
          "computed": false,
          "start": 348,
          "end": 357
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 361,
              "end": 366
            },
            {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 368,
              "end": 373
            }
          ],
          "start": 360,
          "end": 374
        },
        "start": 348,
        "end": 374
      },
      "directive": null,
      "start": 348,
      "end": 375
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 378
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 385
          },
          "optional": false,
          "computed": false,
          "start": 376,
          "end": 385
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 389,
              "end": 390
            },
            {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 392,
              "end": 397
            }
          ],
          "start": 388,
          "end": 398
        },
        "start": 376,
        "end": 398
      },
      "directive": null,
      "start": 376,
      "end": 399
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 402
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 409
          },
          "optional": false,
          "computed": false,
          "start": 400,
          "end": 409
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ObjectExpression",
              "properties": [],
              "start": 413,
              "end": 415
            },
            {
              "type": "ObjectExpression",
              "properties": [],
              "start": 417,
              "end": 419
            }
          ],
          "start": 412,
          "end": 420
        },
        "start": 400,
        "end": 420
      },
      "directive": null,
      "start": 400,
      "end": 421
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 434
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 441
          },
          "optional": false,
          "computed": false,
          "start": 432,
          "end": 441
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 445,
              "end": 446
            },
            {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 448,
              "end": 453
            }
          ],
          "start": 444,
          "end": 454
        },
        "start": 432,
        "end": 454
      },
      "directive": null,
      "start": 432,
      "end": 455
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 458
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 465
          },
          "optional": false,
          "computed": false,
          "start": 456,
          "end": 465
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ObjectExpression",
              "properties": [],
              "start": 469,
              "end": 471
            },
            {
              "type": "ObjectExpression",
              "properties": [],
              "start": 473,
              "end": 475
            }
          ],
          "start": 468,
          "end": 476
        },
        "start": 456,
        "end": 476
      },
      "directive": null,
      "start": 456,
      "end": 477
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 480
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 487
          },
          "optional": false,
          "computed": false,
          "start": 478,
          "end": 487
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ObjectExpression",
              "properties": [],
              "start": 491,
              "end": 493
            }
          ],
          "start": 490,
          "end": 494
        },
        "start": 478,
        "end": 494
      },
      "directive": null,
      "start": 478,
      "end": 495
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 495
}
```
