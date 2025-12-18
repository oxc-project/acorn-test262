__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 20
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
                },
                "start": 20,
                "end": 28
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
              "start": 17,
              "end": 29
            }
          ],
          "start": 15,
          "end": 31
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 31
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 32
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28,
    "range": [
      22,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "simpleVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 56
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 56
        }
      ],
      "declare": false,
      "start": 43,
      "end": 57
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
            "name": "anotherVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 75,
                "end": 78
              },
              "start": 73,
              "end": 78
            },
            "start": 63,
            "end": 78
          },
          "init": null,
          "definite": false,
          "start": 63,
          "end": 78
        }
      ],
      "declare": false,
      "start": 59,
      "end": 79
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
            "name": "varWithSimpleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              },
              "start": 101,
              "end": 109
            },
            "start": 84,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 84,
          "end": 109
        }
      ],
      "declare": false,
      "start": 80,
      "end": 110
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
            "name": "varWithArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 133,
                  "end": 139
                },
                "start": 133,
                "end": 141
              },
              "start": 131,
              "end": 141
            },
            "start": 115,
            "end": 141
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 141
        }
      ],
      "declare": false,
      "start": 111,
      "end": 142
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
            "name": "varWithInitialValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 167
          },
          "init": {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 170,
            "end": 172
          },
          "definite": false,
          "start": 148,
          "end": 172
        }
      ],
      "declare": false,
      "start": 144,
      "end": 173
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
            "name": "withComplicatedValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 199
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 205
                },
                "value": {
                  "type": "Literal",
                  "value": 30,
                  "raw": "30",
                  "start": 207,
                  "end": 209
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 204,
                "end": 209
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 212
                },
                "value": {
                  "type": "Literal",
                  "value": 70,
                  "raw": "70",
                  "start": 214,
                  "end": 216
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 211,
                "end": 216
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "desc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 222
                },
                "value": {
                  "type": "Literal",
                  "value": "position",
                  "raw": "\"position\"",
                  "start": 224,
                  "end": 234
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 218,
                "end": 234
              }
            ],
            "start": 202,
            "end": 236
          },
          "definite": false,
          "start": 179,
          "end": 236
        }
      ],
      "declare": false,
      "start": 175,
      "end": 237
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
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 262
          },
          "init": null,
          "definite": false,
          "start": 251,
          "end": 262
        }
      ],
      "declare": true,
      "start": 239,
      "end": 263
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
            "name": "declareVar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 287
          },
          "init": null,
          "definite": false,
          "start": 276,
          "end": 287
        }
      ],
      "declare": true,
      "start": 264,
      "end": 287
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
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 312
          },
          "init": null,
          "definite": false,
          "start": 301,
          "end": 312
        }
      ],
      "declare": true,
      "start": 289,
      "end": 313
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
            "name": "deckareVarWithType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 346,
                "end": 352
              },
              "start": 344,
              "end": 352
            },
            "start": 326,
            "end": 352
          },
          "init": null,
          "definite": false,
          "start": 326,
          "end": 352
        }
      ],
      "declare": true,
      "start": 314,
      "end": 353
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
            "name": "arrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 369,
                  "end": 375
                },
                "start": 369,
                "end": 377
              },
              "start": 367,
              "end": 377
            },
            "start": 359,
            "end": 377
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 381,
                "end": 384
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 386,
                "end": 389
              }
            ],
            "start": 380,
            "end": 390
          },
          "definite": false,
          "start": 359,
          "end": 390
        }
      ],
      "declare": false,
      "start": 355,
      "end": 391
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "simpleFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 417
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 443,
                    "end": 444
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Hello",
                    "raw": "\"Hello\"",
                    "start": 446,
                    "end": 453
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 443,
                  "end": 453
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 463,
                    "end": 464
                  },
                  "value": {
                    "type": "Literal",
                    "value": "word",
                    "raw": "\"word\"",
                    "start": 466,
                    "end": 472
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 463,
                  "end": 472
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 482,
                    "end": 483
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 485,
                    "end": 486
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 482,
                  "end": 486
                }
              ],
              "start": 433,
              "end": 492
            },
            "start": 426,
            "end": 493
          }
        ],
        "start": 420,
        "end": 495
      },
      "expression": false,
      "start": 394,
      "end": 495
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 507,
        "end": 509
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 535
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 555,
                      "end": 562
                    },
                    "start": 548,
                    "end": 563
                  }
                ],
                "start": 538,
                "end": 569
              },
              "expression": false,
              "start": 523,
              "end": 569
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 516,
            "end": 569
          }
        ],
        "start": 510,
        "end": 571
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 497,
      "end": 571
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 580,
        "end": 582
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "withImportDecl_0",
          "raw": "\"withImportDecl_0\"",
          "start": 593,
          "end": 611
        },
        "start": 585,
        "end": 612
      },
      "importKind": "value",
      "start": 573,
      "end": 613
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 619,
            "end": 620
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 629
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 631
              },
              "optional": false,
              "computed": false,
              "start": 627,
              "end": 631
            },
            "typeArguments": null,
            "arguments": [],
            "start": 623,
            "end": 633
          },
          "definite": false,
          "start": 619,
          "end": 633
        }
      ],
      "declare": false,
      "start": 615,
      "end": 634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 635,
          "end": 636
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 637,
          "end": 640
        },
        "optional": false,
        "computed": false,
        "start": 635,
        "end": 640
      },
      "directive": null,
      "start": 635,
      "end": 641
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 43,
  "end": 641
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 43,
    "end": 46,
    "range": [
      43,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "simpleVar",
    "start": 47,
    "end": 56,
    "range": [
      47,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 59,
    "end": 62,
    "range": [
      59,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "anotherVar",
    "start": 63,
    "end": 73,
    "range": [
      63,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 80,
    "end": 83,
    "range": [
      80,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "varWithSimpleType",
    "start": 84,
    "end": 101,
    "range": [
      84,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 103,
    "end": 109,
    "range": [
      103,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 111,
    "end": 114,
    "range": [
      111,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "varWithArrayType",
    "start": 115,
    "end": 131,
    "range": [
      115,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 133,
    "end": 139,
    "range": [
      133,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 144,
    "end": 147,
    "range": [
      144,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "varWithInitialValue",
    "start": 148,
    "end": 167,
    "range": [
      148,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 170,
    "end": 172,
    "range": [
      170,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "withComplicatedValue",
    "start": 179,
    "end": 199,
    "range": [
      179,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 207,
    "end": 209,
    "range": [
      207,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Numeric",
    "value": "70",
    "start": 214,
    "end": 216,
    "range": [
      214,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "desc",
    "start": 218,
    "end": 222,
    "range": [
      218,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "String",
    "value": "\"position\"",
    "start": 224,
    "end": 234,
    "range": [
      224,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 239,
    "end": 246,
    "range": [
      239,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 247,
    "end": 250,
    "range": [
      247,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "declaredVar",
    "start": 251,
    "end": 262,
    "range": [
      251,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 264,
    "end": 271,
    "range": [
      264,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 272,
    "end": 275,
    "range": [
      272,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "declareVar2",
    "start": 276,
    "end": 287,
    "range": [
      276,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 289,
    "end": 296,
    "range": [
      289,
      296
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 297,
    "end": 300,
    "range": [
      297,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "declaredVar",
    "start": 301,
    "end": 312,
    "range": [
      301,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 314,
    "end": 321,
    "range": [
      314,
      321
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 322,
    "end": 325,
    "range": [
      322,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "deckareVarWithType",
    "start": 326,
    "end": 344,
    "range": [
      326,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 346,
    "end": 352,
    "range": [
      346,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 355,
    "end": 358,
    "range": [
      355,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayVar",
    "start": 359,
    "end": 367,
    "range": [
      359,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 369,
    "end": 375,
    "range": [
      369,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 381,
    "end": 384,
    "range": [
      381,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 386,
    "end": 389,
    "range": [
      386,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 394,
    "end": 402,
    "range": [
      394,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "simpleFunction",
    "start": 403,
    "end": 417,
    "range": [
      403,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 426,
    "end": 432,
    "range": [
      426,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 446,
    "end": 453,
    "range": [
      446,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "String",
    "value": "\"word\"",
    "start": 466,
    "end": 472,
    "range": [
      466,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 497,
    "end": 506,
    "range": [
      497,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 507,
    "end": 509,
    "range": [
      507,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 516,
    "end": 522,
    "range": [
      516,
      522
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 523,
    "end": 531,
    "range": [
      523,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 532,
    "end": 535,
    "range": [
      532,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 548,
    "end": 554,
    "range": [
      548,
      554
    ]
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 555,
    "end": 562,
    "range": [
      555,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 573,
    "end": 579,
    "range": [
      573,
      579
    ]
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 580,
    "end": 582,
    "range": [
      580,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 585,
    "end": 592,
    "range": [
      585,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "String",
    "value": "\"withImportDecl_0\"",
    "start": 593,
    "end": 611,
    "range": [
      593,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 615,
    "end": 618,
    "range": [
      615,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 623,
    "end": 626,
    "range": [
      623,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 627,
    "end": 629,
    "range": [
      627,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 637,
    "end": 640,
    "range": [
      637,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  }
]
```
