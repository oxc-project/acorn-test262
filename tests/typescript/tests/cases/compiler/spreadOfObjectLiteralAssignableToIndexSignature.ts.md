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
