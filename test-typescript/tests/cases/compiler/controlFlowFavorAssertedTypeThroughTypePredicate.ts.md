__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 40,
  "end": 730,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 40,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 66,
        "name": "isObject1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 67,
          "end": 81,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 81,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 74,
              "end": 81
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 82,
        "end": 116,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 84,
          "end": 116,
          "parameterName": {
            "type": "Identifier",
            "start": 84,
            "end": 89,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 116,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 93,
              "end": 116,
              "typeName": {
                "type": "Identifier",
                "start": 93,
                "end": 99,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          }
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 141,
            "name": "obj1",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 143,
      "end": 195,
      "test": {
        "type": "CallExpression",
        "start": 147,
        "end": 162,
        "callee": {
          "type": "Identifier",
          "start": 147,
          "end": 156,
          "name": "isObject1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 157,
            "end": 161,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 164,
        "end": 195,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 170,
            "end": 175,
            "expression": {
              "type": "Identifier",
              "start": 170,
              "end": 174,
              "name": "obj1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 180,
            "end": 193,
            "expression": {
              "type": "MemberExpression",
              "start": 180,
              "end": 192,
              "object": {
                "type": "Identifier",
                "start": 180,
                "end": 184,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 185,
                "end": 191,
                "value": "attr",
                "raw": "'attr'"
              },
              "computed": true,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 234,
      "end": 239,
      "expression": {
        "type": "Identifier",
        "start": 234,
        "end": 238,
        "name": "obj1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 275,
            "name": "obj2",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 277,
      "end": 329,
      "test": {
        "type": "CallExpression",
        "start": 281,
        "end": 296,
        "callee": {
          "type": "Identifier",
          "start": 281,
          "end": 290,
          "name": "isObject1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 291,
            "end": 295,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 298,
        "end": 329,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 304,
            "end": 309,
            "expression": {
              "type": "Identifier",
              "start": 304,
              "end": 308,
              "name": "obj2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 314,
            "end": 327,
            "expression": {
              "type": "MemberExpression",
              "start": 314,
              "end": 326,
              "object": {
                "type": "Identifier",
                "start": 314,
                "end": 318,
                "name": "obj2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 319,
                "end": 325,
                "value": "attr",
                "raw": "'attr'"
              },
              "computed": true,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 368,
      "end": 373,
      "expression": {
        "type": "Identifier",
        "start": 368,
        "end": 372,
        "name": "obj2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 375,
      "end": 431,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 401,
        "name": "isObject2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 402,
          "end": 416,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 407,
            "end": 416,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 409,
              "end": 416
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 417,
        "end": 430,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 419,
          "end": 430,
          "parameterName": {
            "type": "Identifier",
            "start": 419,
            "end": 424,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
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
      }
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
          "id": {
            "type": "Identifier",
            "start": 447,
            "end": 476,
            "name": "obj3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 476,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 453,
                "end": 476,
                "typeName": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 459,
                  "name": "Record",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 478,
      "end": 530,
      "test": {
        "type": "CallExpression",
        "start": 482,
        "end": 497,
        "callee": {
          "type": "Identifier",
          "start": 482,
          "end": 491,
          "name": "isObject2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 492,
            "end": 496,
            "name": "obj3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 499,
        "end": 530,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 505,
            "end": 510,
            "expression": {
              "type": "Identifier",
              "start": 505,
              "end": 509,
              "name": "obj3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 515,
            "end": 528,
            "expression": {
              "type": "MemberExpression",
              "start": 515,
              "end": 527,
              "object": {
                "type": "Identifier",
                "start": 515,
                "end": 519,
                "name": "obj3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 520,
                "end": 526,
                "value": "attr",
                "raw": "'attr'"
              },
              "computed": true,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 569,
      "end": 574,
      "expression": {
        "type": "Identifier",
        "start": 569,
        "end": 573,
        "name": "obj3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 631,
            "name": "obj4",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 596,
                      "end": 602,
                      "name": "Record",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 622,
                    "end": 631
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 633,
      "end": 685,
      "test": {
        "type": "CallExpression",
        "start": 637,
        "end": 652,
        "callee": {
          "type": "Identifier",
          "start": 637,
          "end": 646,
          "name": "isObject2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 647,
            "end": 651,
            "name": "obj4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 654,
        "end": 685,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 660,
            "end": 665,
            "expression": {
              "type": "Identifier",
              "start": 660,
              "end": 664,
              "name": "obj4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 670,
            "end": 683,
            "expression": {
              "type": "MemberExpression",
              "start": 670,
              "end": 682,
              "object": {
                "type": "Identifier",
                "start": 670,
                "end": 674,
                "name": "obj4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 675,
                "end": 681,
                "value": "attr",
                "raw": "'attr'"
              },
              "computed": true,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 724,
      "end": 729,
      "expression": {
        "type": "Identifier",
        "start": 724,
        "end": 728,
        "name": "obj4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
