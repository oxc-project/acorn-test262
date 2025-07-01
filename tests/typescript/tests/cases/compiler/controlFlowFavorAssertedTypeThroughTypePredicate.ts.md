__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isObject1",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 74,
              "end": 81
            },
            "start": 72,
            "end": 81
          },
          "start": 67,
          "end": 81
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 89
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 99
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 100,
                    "end": 106
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 108,
                    "end": 115
                  }
                ],
                "start": 99,
                "end": 116
              },
              "start": 93,
              "end": 116
            },
            "start": 93,
            "end": 116
          },
          "start": 84,
          "end": 116
        },
        "start": 82,
        "end": 116
      },
      "body": null,
      "expression": false,
      "start": 40,
      "end": 117
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 139,
                "end": 141
              },
              "start": 137,
              "end": 141
            },
            "start": 133,
            "end": 141
          },
          "init": null,
          "definite": false,
          "start": 133,
          "end": 141
        }
      ],
      "declare": true,
      "start": 119,
      "end": 142
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isObject1",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 156
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 161
          }
        ],
        "optional": false,
        "start": 147,
        "end": 162
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 174
            },
            "directive": null,
            "start": 170,
            "end": 175
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 184
              },
              "property": {
                "type": "Literal",
                "value": "attr",
                "raw": "'attr'",
                "start": 185,
                "end": 191
              },
              "optional": false,
              "computed": true,
              "start": 180,
              "end": 192
            },
            "directive": null,
            "start": 180,
            "end": 193
          }
        ],
        "start": 164,
        "end": 195
      },
      "alternate": null,
      "start": 143,
      "end": 195
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj1",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 238
      },
      "directive": null,
      "start": 234,
      "end": 239
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 261,
                    "end": 263
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 266,
                    "end": 275
                  }
                ],
                "start": 261,
                "end": 275
              },
              "start": 259,
              "end": 275
            },
            "start": 255,
            "end": 275
          },
          "init": null,
          "definite": false,
          "start": 255,
          "end": 275
        }
      ],
      "declare": true,
      "start": 241,
      "end": 276
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isObject1",
          "optional": false,
          "typeAnnotation": null,
          "start": 281,
          "end": 290
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 295
          }
        ],
        "optional": false,
        "start": 281,
        "end": 296
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj2",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 308
            },
            "directive": null,
            "start": 304,
            "end": 309
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 318
              },
              "property": {
                "type": "Literal",
                "value": "attr",
                "raw": "'attr'",
                "start": 319,
                "end": 325
              },
              "optional": false,
              "computed": true,
              "start": 314,
              "end": 326
            },
            "directive": null,
            "start": 314,
            "end": 327
          }
        ],
        "start": 298,
        "end": 329
      },
      "alternate": null,
      "start": 277,
      "end": 329
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj2",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 372
      },
      "directive": null,
      "start": 368,
      "end": 373
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isObject2",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 401
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 409,
              "end": 416
            },
            "start": 407,
            "end": 416
          },
          "start": 402,
          "end": 416
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 424
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 428,
              "end": 430
            },
            "start": 428,
            "end": 430
          },
          "start": 419,
          "end": 430
        },
        "start": 417,
        "end": 430
      },
      "body": null,
      "expression": false,
      "start": 375,
      "end": 431
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
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 459
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 460,
                      "end": 466
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 468,
                      "end": 475
                    }
                  ],
                  "start": 459,
                  "end": 476
                },
                "start": 453,
                "end": 476
              },
              "start": 451,
              "end": 476
            },
            "start": 447,
            "end": 476
          },
          "init": null,
          "definite": false,
          "start": 447,
          "end": 476
        }
      ],
      "declare": true,
      "start": 433,
      "end": 477
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isObject2",
          "optional": false,
          "typeAnnotation": null,
          "start": 482,
          "end": 491
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 496
          }
        ],
        "optional": false,
        "start": 482,
        "end": 497
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj3",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 509
            },
            "directive": null,
            "start": 505,
            "end": 510
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj3",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 519
              },
              "property": {
                "type": "Literal",
                "value": "attr",
                "raw": "'attr'",
                "start": 520,
                "end": 526
              },
              "optional": false,
              "computed": true,
              "start": 515,
              "end": 527
            },
            "directive": null,
            "start": 515,
            "end": 528
          }
        ],
        "start": 499,
        "end": 530
      },
      "alternate": null,
      "start": 478,
      "end": 530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj3",
        "optional": false,
        "typeAnnotation": null,
        "start": 569,
        "end": 573
      },
      "directive": null,
      "start": 569,
      "end": 574
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
            "name": "obj4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 602
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 603,
                          "end": 609
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 611,
                          "end": 618
                        }
                      ],
                      "start": 602,
                      "end": 619
                    },
                    "start": 596,
                    "end": 619
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 622,
                    "end": 631
                  }
                ],
                "start": 596,
                "end": 631
              },
              "start": 594,
              "end": 631
            },
            "start": 590,
            "end": 631
          },
          "init": null,
          "definite": false,
          "start": 590,
          "end": 631
        }
      ],
      "declare": true,
      "start": 576,
      "end": 632
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isObject2",
          "optional": false,
          "typeAnnotation": null,
          "start": 637,
          "end": 646
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 651
          }
        ],
        "optional": false,
        "start": 637,
        "end": 652
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj4",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 664
            },
            "directive": null,
            "start": 660,
            "end": 665
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj4",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 674
              },
              "property": {
                "type": "Literal",
                "value": "attr",
                "raw": "'attr'",
                "start": 675,
                "end": 681
              },
              "optional": false,
              "computed": true,
              "start": 670,
              "end": 682
            },
            "directive": null,
            "start": 670,
            "end": 683
          }
        ],
        "start": 654,
        "end": 685
      },
      "alternate": null,
      "start": 633,
      "end": 685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj4",
        "optional": false,
        "typeAnnotation": null,
        "start": 724,
        "end": 728
      },
      "directive": null,
      "start": 724,
      "end": 729
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 40,
  "end": 729
}
```
