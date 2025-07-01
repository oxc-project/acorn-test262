__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 15,
              "end": 16
            },
            "definite": false,
            "start": 11,
            "end": 16
          }
        ],
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 72
          },
          "start": 62,
          "end": 72
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./f1",
        "raw": "'./f1'",
        "start": 78,
        "end": 84
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 85
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 92
          },
          "init": {
            "type": "Literal",
            "value": "baz",
            "raw": "'baz'",
            "start": 95,
            "end": 100
          },
          "definite": false,
          "start": 91,
          "end": 100
        }
      ],
      "declare": false,
      "start": 87,
      "end": 101
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 108
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 110
          },
          "optional": false,
          "computed": false,
          "start": 103,
          "end": 110
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 113,
          "end": 114
        },
        "start": 103,
        "end": 114
      },
      "directive": null,
      "start": 103,
      "end": 115
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 121
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 122,
            "end": 125
          },
          "optional": false,
          "computed": true,
          "start": 116,
          "end": 126
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 129,
          "end": 130
        },
        "start": 116,
        "end": 130
      },
      "directive": null,
      "start": 116,
      "end": 131
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 137
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "blah",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 142
          },
          "optional": false,
          "computed": false,
          "start": 132,
          "end": 142
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 145,
          "end": 146
        },
        "start": 132,
        "end": 146
      },
      "directive": null,
      "start": 132,
      "end": 147
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "optional": false,
          "computed": true,
          "start": 148,
          "end": 156
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 159,
          "end": 160
        },
        "start": 148,
        "end": 160
      },
      "directive": null,
      "start": 148,
      "end": 161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 168
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 170
          },
          "optional": false,
          "computed": false,
          "start": 163,
          "end": 170
        },
        "start": 163,
        "end": 172
      },
      "directive": null,
      "start": 163,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 179
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 180,
            "end": 183
          },
          "optional": false,
          "computed": true,
          "start": 174,
          "end": 184
        },
        "start": 174,
        "end": 186
      },
      "directive": null,
      "start": 174,
      "end": 187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 193
          },
          "property": {
            "type": "Literal",
            "value": "blah",
            "raw": "'blah'",
            "start": 194,
            "end": 200
          },
          "optional": false,
          "computed": true,
          "start": 188,
          "end": 201
        },
        "start": 188,
        "end": 203
      },
      "directive": null,
      "start": 188,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 210
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 212
          },
          "optional": false,
          "computed": true,
          "start": 205,
          "end": 213
        },
        "start": 205,
        "end": 215
      },
      "directive": null,
      "start": 205,
      "end": 216
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 224
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 226
          },
          "optional": false,
          "computed": false,
          "start": 219,
          "end": 226
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 230,
          "end": 231
        },
        "start": 218,
        "end": 231
      },
      "directive": null,
      "start": 218,
      "end": 232
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 239
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 240,
            "end": 243
          },
          "optional": false,
          "computed": true,
          "start": 234,
          "end": 244
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 248,
          "end": 249
        },
        "start": 233,
        "end": 249
      },
      "directive": null,
      "start": 233,
      "end": 250
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 257
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "blah",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 262
          },
          "optional": false,
          "computed": false,
          "start": 252,
          "end": 262
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 266,
          "end": 267
        },
        "start": 251,
        "end": 267
      },
      "directive": null,
      "start": 251,
      "end": 268
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 275
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 277
          },
          "optional": false,
          "computed": true,
          "start": 270,
          "end": 278
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 282,
          "end": 283
        },
        "start": 269,
        "end": 283
      },
      "directive": null,
      "start": 269,
      "end": 284
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 292
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 294
          },
          "optional": false,
          "computed": false,
          "start": 287,
          "end": 294
        },
        "start": 286,
        "end": 297
      },
      "directive": null,
      "start": 286,
      "end": 298
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 305
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 306,
            "end": 309
          },
          "optional": false,
          "computed": true,
          "start": 300,
          "end": 310
        },
        "start": 299,
        "end": 313
      },
      "directive": null,
      "start": 299,
      "end": 314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 321
          },
          "property": {
            "type": "Literal",
            "value": "blah",
            "raw": "'blah'",
            "start": 322,
            "end": 328
          },
          "optional": false,
          "computed": true,
          "start": 316,
          "end": 329
        },
        "start": 315,
        "end": 332
      },
      "directive": null,
      "start": 315,
      "end": 333
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 340
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 342
          },
          "optional": false,
          "computed": true,
          "start": 335,
          "end": 343
        },
        "start": 334,
        "end": 346
      },
      "directive": null,
      "start": 334,
      "end": 347
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 354,
          "end": 359
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 361
        },
        "optional": false,
        "computed": false,
        "start": 354,
        "end": 361
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 365,
        "end": 367
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 369,
        "end": 371
      },
      "start": 349,
      "end": 371
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 377,
          "end": 382
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 383,
          "end": 384
        },
        "optional": false,
        "computed": false,
        "start": 377,
        "end": 384
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 388,
        "end": 390
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 392,
        "end": 394
      },
      "start": 372,
      "end": 394
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 400,
          "end": 405
        },
        "property": {
          "type": "Literal",
          "value": "x",
          "raw": "'x'",
          "start": 406,
          "end": 409
        },
        "optional": false,
        "computed": true,
        "start": 400,
        "end": 410
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 414,
        "end": 416
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 418,
        "end": 420
      },
      "start": 395,
      "end": 420
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 431
        },
        "property": {
          "type": "Literal",
          "value": "x",
          "raw": "'x'",
          "start": 432,
          "end": 435
        },
        "optional": false,
        "computed": true,
        "start": 426,
        "end": 436
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 440,
        "end": 442
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 444,
        "end": 446
      },
      "start": 421,
      "end": 446
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 452,
          "end": 457
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 462
        },
        "optional": false,
        "computed": false,
        "start": 452,
        "end": 462
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 466,
        "end": 468
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 470,
        "end": 472
      },
      "start": 447,
      "end": 472
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 483
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null,
          "start": 484,
          "end": 488
        },
        "optional": false,
        "computed": false,
        "start": 478,
        "end": 488
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 492,
        "end": 494
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 496,
        "end": 498
      },
      "start": 473,
      "end": 498
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 509
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 510,
          "end": 511
        },
        "optional": false,
        "computed": true,
        "start": 504,
        "end": 512
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 516,
        "end": 518
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 520,
        "end": 522
      },
      "start": 499,
      "end": 522
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 528,
          "end": 533
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 535
        },
        "optional": false,
        "computed": true,
        "start": 528,
        "end": 536
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 540,
        "end": 542
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 544,
        "end": 546
      },
      "start": 523,
      "end": 546
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 559
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 560,
          "end": 561
        },
        "optional": false,
        "computed": false,
        "start": 554,
        "end": 561
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 566,
        "end": 568
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 570,
        "end": 572
      },
      "start": 548,
      "end": 572
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 579,
          "end": 584
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 585,
          "end": 586
        },
        "optional": false,
        "computed": false,
        "start": 579,
        "end": 586
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 591,
        "end": 593
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 595,
        "end": 597
      },
      "start": 573,
      "end": 597
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 604,
          "end": 609
        },
        "property": {
          "type": "Literal",
          "value": "x",
          "raw": "'x'",
          "start": 610,
          "end": 613
        },
        "optional": false,
        "computed": true,
        "start": 604,
        "end": 614
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 619,
        "end": 621
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 623,
        "end": 625
      },
      "start": 598,
      "end": 625
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 632,
          "end": 637
        },
        "property": {
          "type": "Literal",
          "value": "x",
          "raw": "'x'",
          "start": 638,
          "end": 641
        },
        "optional": false,
        "computed": true,
        "start": 632,
        "end": 642
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 647,
        "end": 649
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 651,
        "end": 653
      },
      "start": 626,
      "end": 653
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 665
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null,
          "start": 666,
          "end": 670
        },
        "optional": false,
        "computed": false,
        "start": 660,
        "end": 670
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 675,
        "end": 677
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 679,
        "end": 681
      },
      "start": 654,
      "end": 681
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 688,
          "end": 693
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null,
          "start": 694,
          "end": 698
        },
        "optional": false,
        "computed": false,
        "start": 688,
        "end": 698
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 703,
        "end": 705
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 707,
        "end": 709
      },
      "start": 682,
      "end": 709
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 721
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 722,
          "end": 723
        },
        "optional": false,
        "computed": true,
        "start": 716,
        "end": 724
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 729,
        "end": 731
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 733,
        "end": 735
      },
      "start": 710,
      "end": 735
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 742,
          "end": 747
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 748,
          "end": 749
        },
        "optional": false,
        "computed": true,
        "start": 742,
        "end": 750
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 755,
        "end": 757
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 759,
        "end": 761
      },
      "start": 736,
      "end": 761
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 55,
  "end": 763
}
```
