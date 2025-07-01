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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 25,
                    "end": 32
                  }
                ],
                "start": 7,
                "end": 32
              },
              "start": 5,
              "end": 32
            },
            "start": 4,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 32
        }
      ],
      "declare": false,
      "start": 0,
      "end": 33
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              },
              "start": 42,
              "end": 51
            },
            "start": 38,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 38,
          "end": 51
        }
      ],
      "declare": false,
      "start": 34,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "right": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 59,
            "end": 61
          },
          "start": 55,
          "end": 61
        },
        "operator": "||",
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 68
          },
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 71,
            "end": 72
          },
          "start": 67,
          "end": 72
        },
        "start": 54,
        "end": 73
      },
      "directive": null,
      "start": 54,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 76
      },
      "directive": null,
      "start": 75,
      "end": 77
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 99
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 102,
          "end": 104
        },
        "start": 98,
        "end": 104
      },
      "directive": null,
      "start": 98,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 110
        },
        "operator": "||",
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 116
          },
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 119,
            "end": 120
          },
          "start": 115,
          "end": 120
        },
        "start": 106,
        "end": 121
      },
      "directive": null,
      "start": 106,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
      },
      "directive": null,
      "start": 123,
      "end": 125
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NodeList",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 171
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
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 184
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 186,
                  "end": 192
                },
                "start": 184,
                "end": 192
              },
              "accessibility": null,
              "static": false,
              "start": 178,
              "end": 193
            }
          ],
          "start": 172,
          "end": 195
        },
        "declare": false,
        "start": 153,
        "end": 195
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 146,
      "end": 195
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTMLCollection",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 228
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
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 241
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 243,
                  "end": 249
                },
                "start": 241,
                "end": 249
              },
              "accessibility": null,
              "static": false,
              "start": 235,
              "end": 250
            }
          ],
          "start": 229,
          "end": 252
        },
        "declare": false,
        "start": 204,
        "end": 252
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 197,
      "end": 252
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNodeList",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 281
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "sourceObj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 293,
              "end": 296
            },
            "start": 291,
            "end": 296
          },
          "start": 282,
          "end": 296
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 308
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NodeList",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 320
              },
              "typeArguments": null,
              "start": 312,
              "end": 320
            },
            "start": 312,
            "end": 320
          },
          "start": 299,
          "end": 320
        },
        "start": 297,
        "end": 320
      },
      "body": null,
      "expression": false,
      "start": 254,
      "end": 321
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isHTMLCollection",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 355
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "sourceObj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 367,
              "end": 370
            },
            "start": 365,
            "end": 370
          },
          "start": 356,
          "end": 370
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 382
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLCollection",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 400
              },
              "typeArguments": null,
              "start": 386,
              "end": 400
            },
            "start": 386,
            "end": 400
          },
          "start": 373,
          "end": 400
        },
        "start": 371,
        "end": 400
      },
      "body": null,
      "expression": false,
      "start": 322,
      "end": 401
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventTargetLike",
        "optional": false,
        "typeAnnotation": null,
        "start": 408,
        "end": 423
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 428
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 430,
                    "end": 436
                  },
                  "start": 428,
                  "end": 436
                },
                "accessibility": null,
                "static": false,
                "start": 427,
                "end": 436
              }
            ],
            "start": 426,
            "end": 437
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTMLCollection",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 454
            },
            "typeArguments": null,
            "start": 440,
            "end": 454
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NodeList",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 465
            },
            "typeArguments": null,
            "start": 457,
            "end": 465
          }
        ],
        "start": 426,
        "end": 465
      },
      "declare": false,
      "start": 403,
      "end": 466
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
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EventTargetLike",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 483,
                  "end": 498
                },
                "typeArguments": null,
                "start": 483,
                "end": 498
              },
              "start": 481,
              "end": 498
            },
            "start": 472,
            "end": 498
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 502,
              "end": 505
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 515
            },
            "start": 501,
            "end": 515
          },
          "definite": false,
          "start": 472,
          "end": 515
        }
      ],
      "declare": false,
      "start": 468,
      "end": 516
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNodeList",
          "optional": false,
          "typeAnnotation": null,
          "start": 521,
          "end": 531
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 541
          }
        ],
        "optional": false,
        "start": 521,
        "end": 542
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "sourceObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 559
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 566
              },
              "optional": false,
              "computed": false,
              "start": 550,
              "end": 566
            },
            "directive": null,
            "start": 550,
            "end": 567
          }
        ],
        "start": 544,
        "end": 569
      },
      "alternate": null,
      "start": 517,
      "end": 569
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isHTMLCollection",
          "optional": false,
          "typeAnnotation": null,
          "start": 575,
          "end": 591
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 592,
            "end": 601
          }
        ],
        "optional": false,
        "start": 575,
        "end": 602
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "sourceObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 610,
                "end": 619
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 626
              },
              "optional": false,
              "computed": false,
              "start": 610,
              "end": 626
            },
            "directive": null,
            "start": 610,
            "end": 627
          }
        ],
        "start": 604,
        "end": 629
      },
      "alternate": null,
      "start": 571,
      "end": 629
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNodeList",
            "optional": false,
            "typeAnnotation": null,
            "start": 635,
            "end": 645
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "sourceObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 655
            }
          ],
          "optional": false,
          "start": 635,
          "end": 656
        },
        "operator": "||",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isHTMLCollection",
            "optional": false,
            "typeAnnotation": null,
            "start": 660,
            "end": 676
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "sourceObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 677,
              "end": 686
            }
          ],
          "optional": false,
          "start": 660,
          "end": 687
        },
        "start": 635,
        "end": 687
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "sourceObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 704
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 711
              },
              "optional": false,
              "computed": false,
              "start": 695,
              "end": 711
            },
            "directive": null,
            "start": 695,
            "end": 712
          }
        ],
        "start": 689,
        "end": 714
      },
      "alternate": null,
      "start": 631,
      "end": 714
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 714
}
```
