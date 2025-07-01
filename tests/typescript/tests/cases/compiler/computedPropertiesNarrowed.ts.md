__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 9,
                      "end": 10
                    },
                    "start": 9,
                    "end": 10
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 13,
                      "end": 14
                    },
                    "start": 13,
                    "end": 14
                  }
                ],
                "start": 9,
                "end": 14
              },
              "start": 7,
              "end": 14
            },
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 21
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 28
                },
                "optional": false,
                "computed": false,
                "start": 17,
                "end": 28
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 17,
              "end": 30
            },
            "consequent": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 32,
              "end": 33
            },
            "alternate": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 35,
              "end": 36
            },
            "start": 17,
            "end": 36
          },
          "definite": false,
          "start": 6,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 61
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 65,
              "end": 71
            },
            "start": 63,
            "end": 71
          },
          "start": 62,
          "end": 71
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 87,
                "end": 88
              },
              "start": 87,
              "end": 88
            },
            "start": 87,
            "end": 88
          },
          "start": 74,
          "end": 88
        },
        "start": 72,
        "end": 88
      },
      "body": null,
      "expression": false,
      "start": 38,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assert",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 96
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 98
          }
        ],
        "optional": false,
        "start": 90,
        "end": 99
      },
      "directive": null,
      "start": 90,
      "end": 100
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 113
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
                    "start": 123,
                    "end": 124
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 127,
                    "end": 128
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 122,
                  "end": 128
                }
              ],
              "start": 116,
              "end": 169
            },
            "definite": false,
            "start": 112,
            "end": 169
          }
        ],
        "declare": false,
        "start": 108,
        "end": 169
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 101,
      "end": 169
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 181,
                  "end": 182
                },
                "start": 181,
                "end": 182
              },
              "start": 179,
              "end": 182
            },
            "start": 178,
            "end": 182
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 185,
            "end": 186
          },
          "definite": false,
          "start": 178,
          "end": 186
        }
      ],
      "declare": false,
      "start": 172,
      "end": 186
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 200
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 211
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 214,
                    "end": 215
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 209,
                  "end": 215
                }
              ],
              "start": 203,
              "end": 246
            },
            "definite": false,
            "start": 198,
            "end": 246
          }
        ],
        "declare": false,
        "start": 194,
        "end": 246
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 187,
      "end": 246
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 280
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
                    "start": 286,
                    "end": 287
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 290,
                    "end": 291
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 285,
                  "end": 291
                }
              ],
              "start": 283,
              "end": 293
            },
            "definite": false,
            "start": 278,
            "end": 293
          }
        ],
        "declare": false,
        "start": 274,
        "end": 293
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 267,
      "end": 293
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o31",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 308
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 315,
                      "end": 316
                    },
                    "prefix": true,
                    "start": 314,
                    "end": 316
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 319,
                    "end": 320
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 313,
                  "end": 320
                }
              ],
              "start": 311,
              "end": 322
            },
            "definite": false,
            "start": 305,
            "end": 322
          }
        ],
        "declare": false,
        "start": 301,
        "end": 322
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 294,
      "end": 322
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o32",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 338
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 344,
                      "end": 345
                    },
                    "operator": "-",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 346,
                      "end": 347
                    },
                    "start": 344,
                    "end": 347
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 350,
                    "end": 351
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 343,
                  "end": 351
                }
              ],
              "start": 341,
              "end": 353
            },
            "definite": false,
            "start": 335,
            "end": 353
          }
        ],
        "declare": false,
        "start": 331,
        "end": 353
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 324,
      "end": 353
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
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 377
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 386
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 380,
            "end": 388
          },
          "definite": false,
          "start": 376,
          "end": 388
        }
      ],
      "declare": false,
      "start": 372,
      "end": 389
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o4",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 403
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
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 413,
                    "end": 414
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 417,
                    "end": 418
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 412,
                  "end": 418
                }
              ],
              "start": 406,
              "end": 457
            },
            "definite": false,
            "start": 401,
            "end": 457
          }
        ],
        "declare": false,
        "start": 397,
        "end": 457
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 390,
      "end": 457
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o5",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 472
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 482,
                      "end": 488
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 482,
                    "end": 490
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 493,
                    "end": 494
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 481,
                  "end": 494
                }
              ],
              "start": 475,
              "end": 512
            },
            "definite": false,
            "start": 470,
            "end": 512
          }
        ],
        "declare": false,
        "start": 466,
        "end": 512
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 459,
      "end": 512
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "uu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 531,
                  "end": 537
                },
                "start": 524,
                "end": 537
              },
              "start": 522,
              "end": 537
            },
            "start": 520,
            "end": 537
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 546
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 540,
            "end": 548
          },
          "definite": false,
          "start": 520,
          "end": 548
        }
      ],
      "declare": false,
      "start": 514,
      "end": 549
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o6",
              "optional": false,
              "typeAnnotation": null,
              "start": 561,
              "end": 563
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
                    "name": "uu",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 576
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 579,
                    "end": 580
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 573,
                  "end": 580
                }
              ],
              "start": 567,
              "end": 598
            },
            "definite": false,
            "start": 561,
            "end": 598
          }
        ],
        "declare": false,
        "start": 557,
        "end": 598
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 550,
      "end": 598
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 610,
        "end": 613
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 618,
            "end": 619
          },
          "start": 618,
          "end": 619
        },
        "start": 616,
        "end": 619
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 629,
              "end": 630
            },
            "start": 622,
            "end": 631
          }
        ],
        "start": 620,
        "end": 633
      },
      "expression": false,
      "start": 601,
      "end": 633
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o7",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 647
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 660
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 657,
                    "end": 662
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 665,
                    "end": 666
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 656,
                  "end": 666
                }
              ],
              "start": 650,
              "end": 684
            },
            "definite": false,
            "start": 645,
            "end": 684
          }
        ],
        "declare": false,
        "start": 641,
        "end": 685
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 634,
      "end": 685
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
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 692
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 697,
                    "end": 698
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 700,
                    "end": 701
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 697,
                  "end": 701
                }
              ],
              "start": 695,
              "end": 703
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 712
              },
              "typeArguments": null,
              "start": 707,
              "end": 712
            },
            "start": 695,
            "end": 712
          },
          "definite": false,
          "start": 691,
          "end": 712
        }
      ],
      "declare": false,
      "start": 687,
      "end": 712
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o8",
              "optional": false,
              "typeAnnotation": null,
              "start": 726,
              "end": 728
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 738,
                      "end": 739
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 740,
                      "end": 741
                    },
                    "optional": false,
                    "computed": false,
                    "start": 738,
                    "end": 741
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 744,
                    "end": 745
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 737,
                  "end": 745
                }
              ],
              "start": 731,
              "end": 757
            },
            "definite": false,
            "start": 726,
            "end": 757
          }
        ],
        "declare": false,
        "start": 720,
        "end": 757
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 713,
      "end": 757
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 768,
        "end": 770
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
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 784,
                      "end": 785
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 787,
                      "end": 788
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 784,
                    "end": 788
                  }
                ],
                "start": 782,
                "end": 790
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 794,
                  "end": 799
                },
                "typeArguments": null,
                "start": 794,
                "end": 799
              },
              "start": 782,
              "end": 799
            },
            "start": 775,
            "end": 799
          }
        ],
        "start": 773,
        "end": 801
      },
      "expression": false,
      "start": 759,
      "end": 801
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o9",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 817
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ns",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 827,
                        "end": 829
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 827,
                      "end": 831
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 832,
                      "end": 833
                    },
                    "optional": false,
                    "computed": false,
                    "start": 827,
                    "end": 833
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 836,
                    "end": 837
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 826,
                  "end": 837
                }
              ],
              "start": 820,
              "end": 839
            },
            "definite": false,
            "start": 815,
            "end": 839
          }
        ],
        "declare": false,
        "start": 809,
        "end": 839
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 802,
      "end": 839
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 839
}
```
