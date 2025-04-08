__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 729,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 31,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 11,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 17,
                  "name": "Record",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 17,
                  "end": 31,
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
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 34,
            "end": 36,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 44,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 69,
        "name": "RecordOfRecords",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 78,
          "end": 112,
          "expression": {
            "type": "Identifier",
            "start": 78,
            "end": 84,
            "name": "Record",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 84,
            "end": 112,
            "params": [
              {
                "type": "TSTypeOperator",
                "start": 85,
                "end": 94,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 91,
                  "end": 94
                }
              },
              {
                "type": "TSTypeReference",
                "start": 96,
                "end": 111,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 111,
                  "name": "RecordOfRecords",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 113,
        "end": 115,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 154,
            "name": "recordOfRecords",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 139,
                "end": 154,
                "typeName": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 154,
                  "name": "RecordOfRecords",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 157,
            "end": 159,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 160,
      "end": 221,
      "expression": {
        "type": "AssignmentExpression",
        "start": 160,
        "end": 221,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 160,
          "end": 181,
          "object": {
            "type": "Identifier",
            "start": 160,
            "end": 175,
            "name": "recordOfRecords",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 176,
            "end": 181,
            "name": "propA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 184,
          "end": 221,
          "properties": [
            {
              "type": "SpreadElement",
              "start": 185,
              "end": 220,
              "argument": {
                "type": "ConditionalExpression",
                "start": 189,
                "end": 219,
                "test": {
                  "type": "BinaryExpression",
                  "start": 189,
                  "end": 206,
                  "left": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 192,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 206,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "start": 209,
                  "end": 214,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 210,
                      "end": 213,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 213,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 213,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "alternate": {
                  "type": "ObjectExpression",
                  "start": 217,
                  "end": 219,
                  "properties": []
                }
              }
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 271,
      "expression": {
        "type": "AssignmentExpression",
        "start": 228,
        "end": 271,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 228,
          "end": 249,
          "object": {
            "type": "Identifier",
            "start": 228,
            "end": 243,
            "name": "recordOfRecords",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 244,
            "end": 249,
            "name": "propB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 252,
          "end": 271,
          "properties": [
            {
              "type": "SpreadElement",
              "start": 253,
              "end": 270,
              "argument": {
                "type": "LogicalExpression",
                "start": 257,
                "end": 269,
                "left": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 260,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "&&",
                "right": {
                  "type": "ObjectExpression",
                  "start": 264,
                  "end": 269,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 265,
                      "end": 268,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 268,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 268,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 335,
      "expression": {
        "type": "AssignmentExpression",
        "start": 278,
        "end": 335,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 278,
          "end": 299,
          "object": {
            "type": "Identifier",
            "start": 278,
            "end": 293,
            "name": "recordOfRecords",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 294,
            "end": 299,
            "name": "propC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 302,
          "end": 335,
          "properties": [
            {
              "type": "SpreadElement",
              "start": 303,
              "end": 334,
              "argument": {
                "type": "LogicalExpression",
                "start": 307,
                "end": 333,
                "left": {
                  "type": "BinaryExpression",
                  "start": 307,
                  "end": 324,
                  "left": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 310,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 324,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "ObjectExpression",
                  "start": 328,
                  "end": 333,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 329,
                      "end": 332,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 332,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 332,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 374,
      "end": 464,
      "id": {
        "type": "Identifier",
        "start": 384,
        "end": 406,
        "name": "RecordOfRecordsOrEmpty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 415,
          "end": 461,
          "expression": {
            "type": "Identifier",
            "start": 415,
            "end": 421,
            "name": "Record",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 421,
            "end": 461,
            "params": [
              {
                "type": "TSTypeOperator",
                "start": 422,
                "end": 431,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 428,
                  "end": 431
                }
              },
              {
                "type": "TSUnionType",
                "start": 433,
                "end": 460,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 433,
                    "end": 455,
                    "typeName": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 455,
                      "name": "RecordOfRecordsOrEmpty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 458,
                    "end": 460,
                    "members": []
                  }
                ]
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 462,
        "end": 464,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 465,
      "end": 523,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 471,
          "end": 523,
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 518,
            "name": "recordsOfRecordsOrEmpty",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 494,
              "end": 518,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 496,
                "end": 518,
                "typeName": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 518,
                  "name": "RecordOfRecordsOrEmpty",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 521,
            "end": 523,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 524,
      "end": 593,
      "expression": {
        "type": "AssignmentExpression",
        "start": 524,
        "end": 593,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 524,
          "end": 553,
          "object": {
            "type": "Identifier",
            "start": 524,
            "end": 547,
            "name": "recordsOfRecordsOrEmpty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 548,
            "end": 553,
            "name": "propA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 556,
          "end": 593,
          "properties": [
            {
              "type": "SpreadElement",
              "start": 557,
              "end": 592,
              "argument": {
                "type": "ConditionalExpression",
                "start": 561,
                "end": 591,
                "test": {
                  "type": "BinaryExpression",
                  "start": 561,
                  "end": 578,
                  "left": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 564,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 578,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "start": 581,
                  "end": 586,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 582,
                      "end": 585,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 585,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 585,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "alternate": {
                  "type": "ObjectExpression",
                  "start": 589,
                  "end": 591,
                  "properties": []
                }
              }
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 600,
      "end": 651,
      "expression": {
        "type": "AssignmentExpression",
        "start": 600,
        "end": 651,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 600,
          "end": 629,
          "object": {
            "type": "Identifier",
            "start": 600,
            "end": 623,
            "name": "recordsOfRecordsOrEmpty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 624,
            "end": 629,
            "name": "propB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 632,
          "end": 651,
          "properties": [
            {
              "type": "SpreadElement",
              "start": 633,
              "end": 650,
              "argument": {
                "type": "LogicalExpression",
                "start": 637,
                "end": 649,
                "left": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 640,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "&&",
                "right": {
                  "type": "ObjectExpression",
                  "start": 644,
                  "end": 649,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 645,
                      "end": 648,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 645,
                        "end": 648,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 645,
                        "end": 648,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 658,
      "end": 723,
      "expression": {
        "type": "AssignmentExpression",
        "start": 658,
        "end": 723,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 658,
          "end": 687,
          "object": {
            "type": "Identifier",
            "start": 658,
            "end": 681,
            "name": "recordsOfRecordsOrEmpty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 682,
            "end": 687,
            "name": "propC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 690,
          "end": 723,
          "properties": [
            {
              "type": "SpreadElement",
              "start": 691,
              "end": 722,
              "argument": {
                "type": "LogicalExpression",
                "start": 695,
                "end": 721,
                "left": {
                  "type": "BinaryExpression",
                  "start": 695,
                  "end": 712,
                  "left": {
                    "type": "Identifier",
                    "start": 695,
                    "end": 698,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 703,
                    "end": 712,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "ObjectExpression",
                  "start": 716,
                  "end": 721,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 717,
                      "end": 720,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 717,
                        "end": 720,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 717,
                        "end": 720,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
