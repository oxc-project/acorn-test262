__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 14,
                  "end": 15
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 16,
                  "end": 17
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 17
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 24,
                  "end": 25
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 27,
                  "end": 28
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 23,
                "end": 28
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "3",
                  "raw": "\"3\"",
                  "start": 34,
                  "end": 37
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 38,
                  "end": 39
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 34,
                "end": 39
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "4",
                  "raw": "\"4\"",
                  "start": 46,
                  "end": 49
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 51,
                  "end": 52
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 45,
                "end": 52
              }
            ],
            "start": 8,
            "end": 54
          },
          "definite": false,
          "start": 4,
          "end": 54
        }
      ],
      "declare": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 56
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 57,
              "end": 58
            },
            "optional": false,
            "computed": true,
            "start": 55,
            "end": 59
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 73
          },
          "optional": false,
          "computed": false,
          "start": 55,
          "end": 73
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 55,
        "end": 75
      },
      "directive": null,
      "start": 55,
      "end": 76
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 79,
              "end": 80
            },
            "optional": false,
            "computed": true,
            "start": 77,
            "end": 81
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 95
          },
          "optional": false,
          "computed": false,
          "start": 77,
          "end": 95
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 77,
        "end": 97
      },
      "directive": null,
      "start": 77,
      "end": 98
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 101,
              "end": 102
            },
            "optional": false,
            "computed": true,
            "start": 99,
            "end": 103
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 117
          },
          "optional": false,
          "computed": false,
          "start": 99,
          "end": 117
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 99,
        "end": 119
      },
      "directive": null,
      "start": 99,
      "end": 120
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "property": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 123,
              "end": 124
            },
            "optional": false,
            "computed": true,
            "start": 121,
            "end": 125
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 139
          },
          "optional": false,
          "computed": false,
          "start": 121,
          "end": 139
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 121,
        "end": 141
      },
      "directive": null,
      "start": 121,
      "end": 142
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 155
      },
      "typeParameters": null,
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 162,
              "end": 163
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              },
              "start": 163,
              "end": 170
            },
            "accessibility": null,
            "static": false,
            "start": 162,
            "end": 171
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 177,
              "end": 178
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 180,
                "end": 186
              },
              "start": 179,
              "end": 186
            },
            "accessibility": null,
            "static": false,
            "start": 176,
            "end": 187
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 192,
              "end": 195
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 196,
                "end": 202
              },
              "start": 195,
              "end": 202
            },
            "accessibility": null,
            "static": false,
            "start": 192,
            "end": 203
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "4",
              "raw": "\"4\"",
              "start": 209,
              "end": 212
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 214,
                "end": 220
              },
              "start": 213,
              "end": 220
            },
            "accessibility": null,
            "static": false,
            "start": 208,
            "end": 221
          }
        ],
        "start": 156,
        "end": 223
      },
      "declare": false,
      "start": 144,
      "end": 223
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 232
                },
                "typeArguments": null,
                "start": 231,
                "end": 232
              },
              "start": 230,
              "end": 232
            },
            "start": 229,
            "end": 232
          },
          "init": null,
          "definite": false,
          "start": 229,
          "end": 232
        }
      ],
      "declare": false,
      "start": 225,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 235
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 236,
              "end": 237
            },
            "optional": false,
            "computed": true,
            "start": 234,
            "end": 238
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 252
          },
          "optional": false,
          "computed": false,
          "start": 234,
          "end": 252
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 234,
        "end": 254
      },
      "directive": null,
      "start": 234,
      "end": 255
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 257
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 258,
              "end": 259
            },
            "optional": false,
            "computed": true,
            "start": 256,
            "end": 260
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 274
          },
          "optional": false,
          "computed": false,
          "start": 256,
          "end": 274
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 256,
        "end": 276
      },
      "directive": null,
      "start": 256,
      "end": 277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 279
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 280,
              "end": 281
            },
            "optional": false,
            "computed": true,
            "start": 278,
            "end": 282
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 296
          },
          "optional": false,
          "computed": false,
          "start": 278,
          "end": 296
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 278,
        "end": 298
      },
      "directive": null,
      "start": 278,
      "end": 299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 301
            },
            "property": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 302,
              "end": 303
            },
            "optional": false,
            "computed": true,
            "start": 300,
            "end": 304
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 318
          },
          "optional": false,
          "computed": false,
          "start": 300,
          "end": 318
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 300,
        "end": 320
      },
      "directive": null,
      "start": 300,
      "end": 321
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 330
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 337,
              "end": 338
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 339,
                "end": 345
              },
              "start": 338,
              "end": 345
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 337,
            "end": 346
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 352,
              "end": 353
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 355,
                "end": 361
              },
              "start": 354,
              "end": 361
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 351,
            "end": 362
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 367,
              "end": 370
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 371,
                "end": 377
              },
              "start": 370,
              "end": 377
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 367,
            "end": 378
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "4",
              "raw": "\"4\"",
              "start": 384,
              "end": 387
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 389,
                "end": 395
              },
              "start": 388,
              "end": 395
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 383,
            "end": 396
          }
        ],
        "start": 331,
        "end": 398
      },
      "abstract": false,
      "declare": false,
      "start": 323,
      "end": 398
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 407
                },
                "typeArguments": null,
                "start": 406,
                "end": 407
              },
              "start": 405,
              "end": 407
            },
            "start": 404,
            "end": 407
          },
          "init": null,
          "definite": false,
          "start": 404,
          "end": 407
        }
      ],
      "declare": false,
      "start": 400,
      "end": 408
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 410
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 411,
              "end": 412
            },
            "optional": false,
            "computed": true,
            "start": 409,
            "end": 413
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 427
          },
          "optional": false,
          "computed": false,
          "start": 409,
          "end": 427
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 409,
        "end": 429
      },
      "directive": null,
      "start": 409,
      "end": 430
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 432
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 433,
              "end": 434
            },
            "optional": false,
            "computed": true,
            "start": 431,
            "end": 435
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 449
          },
          "optional": false,
          "computed": false,
          "start": 431,
          "end": 449
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 431,
        "end": 451
      },
      "directive": null,
      "start": 431,
      "end": 452
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 454
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 455,
              "end": 456
            },
            "optional": false,
            "computed": true,
            "start": 453,
            "end": 457
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 458,
            "end": 471
          },
          "optional": false,
          "computed": false,
          "start": 453,
          "end": 471
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 453,
        "end": 473
      },
      "directive": null,
      "start": 453,
      "end": 474
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 476
            },
            "property": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 477,
              "end": 478
            },
            "optional": false,
            "computed": true,
            "start": 475,
            "end": 479
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 480,
            "end": 493
          },
          "optional": false,
          "computed": false,
          "start": 475,
          "end": 493
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 475,
        "end": 495
      },
      "directive": null,
      "start": 475,
      "end": 496
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 503,
        "end": 504
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 511,
              "end": 512
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 515,
              "end": 516
            },
            "computed": false,
            "start": 511,
            "end": 516
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 523,
              "end": 524
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 528,
              "end": 529
            },
            "computed": true,
            "start": 522,
            "end": 529
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 535,
              "end": 538
            },
            "initializer": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 541,
              "end": 542
            },
            "computed": false,
            "start": 535,
            "end": 542
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "4",
              "raw": "\"4\"",
              "start": 549,
              "end": 552
            },
            "initializer": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 556,
              "end": 557
            },
            "computed": true,
            "start": 548,
            "end": 557
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 563,
              "end": 568
            },
            "initializer": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 571,
              "end": 572
            },
            "computed": false,
            "start": 563,
            "end": 572
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 579,
              "end": 584
            },
            "initializer": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 588,
              "end": 589
            },
            "computed": true,
            "start": 578,
            "end": 589
          }
        ],
        "start": 505,
        "end": 591
      },
      "const": false,
      "declare": false,
      "start": 498,
      "end": 591
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 597,
            "end": 598
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 601,
              "end": 602
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 603,
              "end": 608
            },
            "optional": false,
            "computed": true,
            "start": 601,
            "end": 609
          },
          "definite": false,
          "start": 597,
          "end": 609
        }
      ],
      "declare": false,
      "start": 593,
      "end": 610
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": null,
            "start": 615,
            "end": 617
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 620,
              "end": 621
            },
            "property": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 622,
              "end": 627
            },
            "optional": false,
            "computed": true,
            "start": 620,
            "end": 628
          },
          "definite": false,
          "start": 615,
          "end": 628
        }
      ],
      "declare": false,
      "start": 611,
      "end": 629
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 708
}
```
