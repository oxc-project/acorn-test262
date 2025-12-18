__ESTREE_TEST__:AST:
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
            "name": "foo",
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
                  "start": 11,
                  "end": 17
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 18,
                      "end": 23
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 25,
                      "end": 30
                    }
                  ],
                  "start": 17,
                  "end": 31
                },
                "start": 11,
                "end": 31
              },
              "start": 9,
              "end": 31
            },
            "start": 6,
            "end": 31
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 34,
            "end": 36
          },
          "definite": false,
          "start": 6,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecordOfRecords",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 69
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 84
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 91,
                  "end": 94
                },
                "start": 85,
                "end": 94
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecordOfRecords",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 111
                },
                "typeArguments": null,
                "start": 96,
                "end": 111
              }
            ],
            "start": 84,
            "end": 112
          },
          "start": 78,
          "end": 112
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 113,
        "end": 115
      },
      "declare": false,
      "start": 44,
      "end": 115
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
            "name": "recordOfRecords",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecordOfRecords",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 154
                },
                "typeArguments": null,
                "start": 139,
                "end": 154
              },
              "start": 137,
              "end": 154
            },
            "start": 122,
            "end": 154
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 157,
            "end": 159
          },
          "definite": false,
          "start": 122,
          "end": 159
        }
      ],
      "declare": false,
      "start": 116,
      "end": 159
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
            "name": "recordOfRecords",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 175
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propA",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 181
          },
          "optional": false,
          "computed": false,
          "start": 160,
          "end": 181
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 192
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 206
                  },
                  "start": 189,
                  "end": 206
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 210,
                        "end": 213
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 210,
                        "end": 213
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 210,
                      "end": 213
                    }
                  ],
                  "start": 209,
                  "end": 214
                },
                "alternate": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 217,
                  "end": 219
                },
                "start": 189,
                "end": 219
              },
              "start": 185,
              "end": 220
            }
          ],
          "start": 184,
          "end": 221
        },
        "start": 160,
        "end": 221
      },
      "directive": null,
      "start": 160,
      "end": 221
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
            "name": "recordOfRecords",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 243
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propB",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 249
          },
          "optional": false,
          "computed": false,
          "start": 228,
          "end": 249
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 260
                },
                "operator": "&&",
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 268
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 268
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 265,
                      "end": 268
                    }
                  ],
                  "start": 264,
                  "end": 269
                },
                "start": 257,
                "end": 269
              },
              "start": 253,
              "end": 270
            }
          ],
          "start": 252,
          "end": 271
        },
        "start": 228,
        "end": 271
      },
      "directive": null,
      "start": 228,
      "end": 271
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
            "name": "recordOfRecords",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 293
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propC",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 299
          },
          "optional": false,
          "computed": false,
          "start": 278,
          "end": 299
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 307,
                    "end": 310
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 324
                  },
                  "start": 307,
                  "end": 324
                },
                "operator": "&&",
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 329,
                        "end": 332
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 329,
                        "end": 332
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 329,
                      "end": 332
                    }
                  ],
                  "start": 328,
                  "end": 333
                },
                "start": 307,
                "end": 333
              },
              "start": 303,
              "end": 334
            }
          ],
          "start": 302,
          "end": 335
        },
        "start": 278,
        "end": 335
      },
      "directive": null,
      "start": 278,
      "end": 335
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecordOfRecordsOrEmpty",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 406
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 421
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 428,
                  "end": 431
                },
                "start": 422,
                "end": 431
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RecordOfRecordsOrEmpty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 455
                    },
                    "typeArguments": null,
                    "start": 433,
                    "end": 455
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 458,
                    "end": 460
                  }
                ],
                "start": 433,
                "end": 460
              }
            ],
            "start": 421,
            "end": 461
          },
          "start": 415,
          "end": 461
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 462,
        "end": 464
      },
      "declare": false,
      "start": 374,
      "end": 464
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
            "name": "recordsOfRecordsOrEmpty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecordOfRecordsOrEmpty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 518
                },
                "typeArguments": null,
                "start": 496,
                "end": 518
              },
              "start": 494,
              "end": 518
            },
            "start": 471,
            "end": 518
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 521,
            "end": 523
          },
          "definite": false,
          "start": 471,
          "end": 523
        }
      ],
      "declare": false,
      "start": 465,
      "end": 523
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
            "name": "recordsOfRecordsOrEmpty",
            "optional": false,
            "typeAnnotation": null,
            "start": 524,
            "end": 547
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propA",
            "optional": false,
            "typeAnnotation": null,
            "start": 548,
            "end": 553
          },
          "optional": false,
          "computed": false,
          "start": 524,
          "end": 553
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 564
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 578
                  },
                  "start": 561,
                  "end": 578
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 585
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 585
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 582,
                      "end": 585
                    }
                  ],
                  "start": 581,
                  "end": 586
                },
                "alternate": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 589,
                  "end": 591
                },
                "start": 561,
                "end": 591
              },
              "start": 557,
              "end": 592
            }
          ],
          "start": 556,
          "end": 593
        },
        "start": 524,
        "end": 593
      },
      "directive": null,
      "start": 524,
      "end": 593
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
            "name": "recordsOfRecordsOrEmpty",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 623
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propB",
            "optional": false,
            "typeAnnotation": null,
            "start": 624,
            "end": 629
          },
          "optional": false,
          "computed": false,
          "start": 600,
          "end": 629
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 640
                },
                "operator": "&&",
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 645,
                        "end": 648
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 645,
                        "end": 648
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 645,
                      "end": 648
                    }
                  ],
                  "start": 644,
                  "end": 649
                },
                "start": 637,
                "end": 649
              },
              "start": 633,
              "end": 650
            }
          ],
          "start": 632,
          "end": 651
        },
        "start": 600,
        "end": 651
      },
      "directive": null,
      "start": 600,
      "end": 651
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
            "name": "recordsOfRecordsOrEmpty",
            "optional": false,
            "typeAnnotation": null,
            "start": 658,
            "end": 681
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propC",
            "optional": false,
            "typeAnnotation": null,
            "start": 682,
            "end": 687
          },
          "optional": false,
          "computed": false,
          "start": 658,
          "end": 687
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 695,
                    "end": 698
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 703,
                    "end": 712
                  },
                  "start": 695,
                  "end": 712
                },
                "operator": "&&",
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 717,
                        "end": 720
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 717,
                        "end": 720
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 717,
                      "end": 720
                    }
                  ],
                  "start": 716,
                  "end": 721
                },
                "start": 695,
                "end": 721
              },
              "start": 691,
              "end": 722
            }
          ],
          "start": 690,
          "end": 723
        },
        "start": 658,
        "end": 723
      },
      "directive": null,
      "start": 658,
      "end": 723
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 729
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6,
    "end": 9,
    "range": [
      6,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 11,
    "end": 17,
    "range": [
      11,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 18,
    "end": 23,
    "range": [
      18,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 25,
    "end": 30,
    "range": [
      25,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 44,
    "end": 53,
    "range": [
      44,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "RecordOfRecords",
    "start": 54,
    "end": 69,
    "range": [
      54,
      69
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 70,
    "end": 77,
    "range": [
      70,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 78,
    "end": 84,
    "range": [
      78,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 85,
    "end": 90,
    "range": [
      85,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 91,
    "end": 94,
    "range": [
      91,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "RecordOfRecords",
    "start": 96,
    "end": 111,
    "range": [
      96,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 116,
    "end": 121,
    "range": [
      116,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "recordOfRecords",
    "start": 122,
    "end": 137,
    "range": [
      122,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "RecordOfRecords",
    "start": 139,
    "end": 154,
    "range": [
      139,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "recordOfRecords",
    "start": 160,
    "end": 175,
    "range": [
      160,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "propA",
    "start": 176,
    "end": 181,
    "range": [
      176,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 185,
    "end": 188,
    "range": [
      185,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 193,
    "end": 196,
    "range": [
      193,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 197,
    "end": 206,
    "range": [
      197,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 210,
    "end": 213,
    "range": [
      210,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "recordOfRecords",
    "start": 228,
    "end": 243,
    "range": [
      228,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "propB",
    "start": 244,
    "end": 249,
    "range": [
      244,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 253,
    "end": 256,
    "range": [
      253,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 257,
    "end": 260,
    "range": [
      257,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 261,
    "end": 263,
    "range": [
      261,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 265,
    "end": 268,
    "range": [
      265,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "recordOfRecords",
    "start": 278,
    "end": 293,
    "range": [
      278,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "propC",
    "start": 294,
    "end": 299,
    "range": [
      294,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 303,
    "end": 306,
    "range": [
      303,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 307,
    "end": 310,
    "range": [
      307,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 311,
    "end": 314,
    "range": [
      311,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 315,
    "end": 324,
    "range": [
      315,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 325,
    "end": 327,
    "range": [
      325,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 329,
    "end": 332,
    "range": [
      329,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 374,
    "end": 383,
    "range": [
      374,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "RecordOfRecordsOrEmpty",
    "start": 384,
    "end": 406,
    "range": [
      384,
      406
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 407,
    "end": 414,
    "range": [
      407,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 415,
    "end": 421,
    "range": [
      415,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 422,
    "end": 427,
    "range": [
      422,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 428,
    "end": 431,
    "range": [
      428,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "RecordOfRecordsOrEmpty",
    "start": 433,
    "end": 455,
    "range": [
      433,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 465,
    "end": 470,
    "range": [
      465,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "recordsOfRecordsOrEmpty",
    "start": 471,
    "end": 494,
    "range": [
      471,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "RecordOfRecordsOrEmpty",
    "start": 496,
    "end": 518,
    "range": [
      496,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "recordsOfRecordsOrEmpty",
    "start": 524,
    "end": 547,
    "range": [
      524,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "propA",
    "start": 548,
    "end": 553,
    "range": [
      548,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 557,
    "end": 560,
    "range": [
      557,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 561,
    "end": 564,
    "range": [
      561,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 565,
    "end": 568,
    "range": [
      565,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 569,
    "end": 578,
    "range": [
      569,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 582,
    "end": 585,
    "range": [
      582,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "recordsOfRecordsOrEmpty",
    "start": 600,
    "end": 623,
    "range": [
      600,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "propB",
    "start": 624,
    "end": 629,
    "range": [
      624,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 633,
    "end": 636,
    "range": [
      633,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "&&",
    "start": 641,
    "end": 643,
    "range": [
      641,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 645,
    "end": 648,
    "range": [
      645,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "recordsOfRecordsOrEmpty",
    "start": 658,
    "end": 681,
    "range": [
      658,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "propC",
    "start": 682,
    "end": 687,
    "range": [
      682,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 691,
    "end": 694,
    "range": [
      691,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 695,
    "end": 698,
    "range": [
      695,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 699,
    "end": 702,
    "range": [
      699,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 703,
    "end": 712,
    "range": [
      703,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 713,
    "end": 715,
    "range": [
      713,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 717,
    "end": 720,
    "range": [
      717,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  }
]
```
