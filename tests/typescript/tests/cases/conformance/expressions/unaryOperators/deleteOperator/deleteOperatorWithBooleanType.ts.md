__ESTREE_TEST__:PASS:
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
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 49,
                "end": 56
              },
              "start": 47,
              "end": 56
            },
            "start": 40,
            "end": 56
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 56
        }
      ],
      "declare": false,
      "start": 36,
      "end": 57
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 75,
          "end": 82
        },
        "start": 73,
        "end": 82
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 92,
              "end": 96
            },
            "start": 85,
            "end": 97
          }
        ],
        "start": 83,
        "end": 99
      },
      "expression": false,
      "start": 59,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
                "end": 132
              },
              "start": 123,
              "end": 132
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 115,
            "end": 133
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 148
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "value": false,
                      "raw": "false",
                      "start": 160,
                      "end": 165
                    },
                    "start": 153,
                    "end": 166
                  }
                ],
                "start": 151,
                "end": 168
              },
              "expression": false,
              "start": 148,
              "end": 168
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 138,
            "end": 168
          }
        ],
        "start": 109,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 170
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 182
      },
      "body": {
        "type": "TSModuleBlock",
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 203,
                        "end": 210
                      },
                      "start": 201,
                      "end": 210
                    },
                    "start": 200,
                    "end": 210
                  },
                  "init": null,
                  "definite": false,
                  "start": 200,
                  "end": 210
                }
              ],
              "declare": false,
              "start": 196,
              "end": 211
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 189,
            "end": 211
          }
        ],
        "start": 183,
        "end": 213
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 171,
      "end": 213
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 223
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "typeArguments": null,
            "arguments": [],
            "start": 226,
            "end": 233
          },
          "definite": false,
          "start": 219,
          "end": 233
        }
      ],
      "declare": false,
      "start": 215,
      "end": 234
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 276
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 293
            },
            "prefix": true,
            "start": 279,
            "end": 293
          },
          "definite": false,
          "start": 260,
          "end": 293
        }
      ],
      "declare": false,
      "start": 256,
      "end": 294
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 340
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 350,
              "end": 354
            },
            "prefix": true,
            "start": 343,
            "end": 354
          },
          "definite": false,
          "start": 324,
          "end": 354
        }
      ],
      "declare": false,
      "start": 320,
      "end": 355
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 376
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
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
                    "start": 388,
                    "end": 389
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 391,
                    "end": 395
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 388,
                  "end": 395
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
                    "start": 397,
                    "end": 398
                  },
                  "value": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 400,
                    "end": 405
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 397,
                  "end": 405
                }
              ],
              "start": 386,
              "end": 407
            },
            "prefix": true,
            "start": 379,
            "end": 407
          },
          "definite": false,
          "start": 360,
          "end": 407
        }
      ],
      "declare": false,
      "start": 356,
      "end": 408
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 458
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 472
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 473,
                "end": 474
              },
              "optional": false,
              "computed": false,
              "start": 468,
              "end": 474
            },
            "prefix": true,
            "start": 461,
            "end": 474
          },
          "definite": false,
          "start": 442,
          "end": 474
        }
      ],
      "declare": false,
      "start": 438,
      "end": 475
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null,
            "start": 480,
            "end": 496
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 507
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 509
              },
              "optional": false,
              "computed": false,
              "start": 506,
              "end": 509
            },
            "prefix": true,
            "start": 499,
            "end": 509
          },
          "definite": false,
          "start": 480,
          "end": 509
        }
      ],
      "declare": false,
      "start": 476,
      "end": 510
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 531
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 544
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 541,
              "end": 546
            },
            "prefix": true,
            "start": 534,
            "end": 546
          },
          "definite": false,
          "start": 515,
          "end": 546
        }
      ],
      "declare": false,
      "start": 511,
      "end": 547
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
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 568
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 579
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 580,
                  "end": 583
                },
                "optional": false,
                "computed": false,
                "start": 578,
                "end": 583
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 578,
              "end": 585
            },
            "prefix": true,
            "start": 571,
            "end": 585
          },
          "definite": false,
          "start": 552,
          "end": 585
        }
      ],
      "declare": false,
      "start": 548,
      "end": 586
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
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 637
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 654,
                "end": 661
              },
              "prefix": true,
              "start": 647,
              "end": 661
            },
            "prefix": true,
            "start": 640,
            "end": 661
          },
          "definite": false,
          "start": 621,
          "end": 661
        }
      ],
      "declare": false,
      "start": 617,
      "end": 662
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 700,
          "end": 704
        },
        "prefix": true,
        "start": 693,
        "end": 704
      },
      "directive": null,
      "start": 693,
      "end": 705
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null,
          "start": 713,
          "end": 720
        },
        "prefix": true,
        "start": 706,
        "end": 720
      },
      "directive": null,
      "start": 706,
      "end": 721
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 729,
            "end": 732
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 729,
          "end": 734
        },
        "prefix": true,
        "start": 722,
        "end": 734
      },
      "directive": null,
      "start": 722,
      "end": 735
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 743,
              "end": 747
            },
            "prefix": true,
            "start": 736,
            "end": 747
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 749,
            "end": 754
          }
        ],
        "start": 736,
        "end": 754
      },
      "directive": null,
      "start": 736,
      "end": 755
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 763,
            "end": 767
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 768,
            "end": 769
          },
          "optional": false,
          "computed": false,
          "start": 763,
          "end": 769
        },
        "prefix": true,
        "start": 756,
        "end": 769
      },
      "directive": null,
      "start": 756,
      "end": 770
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 778,
            "end": 779
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 780,
            "end": 781
          },
          "optional": false,
          "computed": false,
          "start": 778,
          "end": 781
        },
        "prefix": true,
        "start": 771,
        "end": 781
      },
      "directive": null,
      "start": 771,
      "end": 782
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 36,
  "end": 782
}
```
