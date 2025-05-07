__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 40,
  "end": 729,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 40,
      "end": 117,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 66,
        "decorators": [],
        "name": "isObject1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 67,
          "end": 81,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 81,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 74,
              "end": 81
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 82,
        "end": 116,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 84,
          "end": 116,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 84,
            "end": 89,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 116,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 93,
              "end": 116,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 99,
                "end": 116,
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
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 93,
                "end": 99,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 141,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 139,
                "end": 141,
                "members": []
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 143,
      "end": 195,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 164,
        "end": 195,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 170,
            "end": 175,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 170,
              "end": 174,
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 180,
            "end": 193,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 180,
              "end": 192,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 180,
                "end": 184,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 185,
                "end": 191,
                "raw": "'attr'",
                "value": "attr",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 147,
        "end": 162,
        "arguments": [
          {
            "type": "Identifier",
            "start": 157,
            "end": 161,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 147,
          "end": 156,
          "decorators": [],
          "name": "isObject1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 234,
      "end": 239,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 234,
        "end": 238,
        "decorators": [],
        "name": "obj1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 275,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 275,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 259,
              "end": 275,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 261,
                "end": 275,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 261,
                    "end": 263,
                    "members": []
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 266,
                    "end": 275
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 277,
      "end": 329,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 298,
        "end": 329,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 304,
            "end": 309,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 304,
              "end": 308,
              "decorators": [],
              "name": "obj2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 314,
            "end": 327,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 314,
              "end": 326,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 314,
                "end": 318,
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 319,
                "end": 325,
                "raw": "'attr'",
                "value": "attr",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 281,
        "end": 296,
        "arguments": [
          {
            "type": "Identifier",
            "start": 291,
            "end": 295,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 281,
          "end": 290,
          "decorators": [],
          "name": "isObject1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 368,
      "end": 373,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 368,
        "end": 372,
        "decorators": [],
        "name": "obj2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 375,
      "end": 431,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 401,
        "decorators": [],
        "name": "isObject2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 402,
          "end": 416,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 407,
            "end": 416,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 409,
              "end": 416
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 417,
        "end": 430,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 419,
          "end": 430,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 419,
            "end": 424,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 428,
            "end": 430,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 428,
              "end": 430,
              "members": []
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 477,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 447,
          "end": 476,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 447,
            "end": 476,
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 476,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 453,
                "end": 476,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 459,
                  "end": 476,
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
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 459,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 478,
      "end": 530,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 499,
        "end": 530,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 505,
            "end": 510,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 505,
              "end": 509,
              "decorators": [],
              "name": "obj3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 515,
            "end": 528,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 515,
              "end": 527,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 515,
                "end": 519,
                "decorators": [],
                "name": "obj3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 520,
                "end": 526,
                "raw": "'attr'",
                "value": "attr",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 482,
        "end": 497,
        "arguments": [
          {
            "type": "Identifier",
            "start": 492,
            "end": 496,
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 482,
          "end": 491,
          "decorators": [],
          "name": "isObject2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 569,
      "end": 574,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 569,
        "end": 573,
        "decorators": [],
        "name": "obj3",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 576,
      "end": 632,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 631,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 631,
            "decorators": [],
            "name": "obj4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 594,
              "end": 631,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 596,
                "end": 631,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 596,
                    "end": 619,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 602,
                      "end": 619,
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
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 596,
                      "end": 602,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 622,
                    "end": 631
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 633,
      "end": 685,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 654,
        "end": 685,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 660,
            "end": 665,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 660,
              "end": 664,
              "decorators": [],
              "name": "obj4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 670,
            "end": 683,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 670,
              "end": 682,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 670,
                "end": 674,
                "decorators": [],
                "name": "obj4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 675,
                "end": 681,
                "raw": "'attr'",
                "value": "attr",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 637,
        "end": 652,
        "arguments": [
          {
            "type": "Identifier",
            "start": 647,
            "end": 651,
            "decorators": [],
            "name": "obj4",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 637,
          "end": 646,
          "decorators": [],
          "name": "isObject2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 724,
      "end": 729,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 724,
        "end": 728,
        "decorators": [],
        "name": "obj4",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
