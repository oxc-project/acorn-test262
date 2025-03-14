__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 659,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 29,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Named",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 13,
        "end": 29,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 27,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 19,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 86,
            "decorators": [],
            "name": "notReferenced",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 89,
            "end": 120,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 117,
              "end": 120,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 90,
                "end": 112,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 92,
                    "end": 103,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 96,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 103,
                      "decorators": [],
                      "name": "alias",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 105,
                  "end": 112,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 107,
                    "end": 112,
                    "typeName": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 112,
                      "decorators": [],
                      "name": "Named",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 329,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 281,
            "decorators": [],
            "name": "duplicateIndetifiers",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 284,
            "end": 329,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 326,
              "end": 329,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 285,
                "end": 321,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 287,
                    "end": 298,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 291,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 298,
                      "decorators": [],
                      "name": "alias",
                      "optional": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 300,
                    "end": 312,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 304,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 312,
                      "decorators": [],
                      "name": "alias2",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 314,
                  "end": 321,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 316,
                    "end": 321,
                    "typeName": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 321,
                      "decorators": [],
                      "name": "Named",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 405,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 357,
            "decorators": [],
            "name": "duplicateIndetifiers2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 360,
            "end": 405,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 402,
              "end": 405,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 361,
                "end": 373,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 365,
                  "end": 373,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 367,
                    "end": 373
                  }
                }
              },
              {
                "type": "ObjectPattern",
                "start": 375,
                "end": 397,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 377,
                    "end": 388,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 381,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 388,
                      "decorators": [],
                      "name": "alias",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 390,
                  "end": 397,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 392,
                    "end": 397,
                    "typeName": {
                      "type": "Identifier",
                      "start": 392,
                      "end": 397,
                      "decorators": [],
                      "name": "Named",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 406,
      "end": 492,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 492,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 433,
            "decorators": [],
            "name": "duplicateIndetifiers3",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 436,
            "end": 492,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 489,
              "end": 492,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 437,
                "end": 459,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 439,
                    "end": 450,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 439,
                      "end": 443,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 445,
                      "end": 450,
                      "decorators": [],
                      "name": "alias",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 452,
                  "end": 459,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 454,
                    "end": 459,
                    "typeName": {
                      "type": "Identifier",
                      "start": 454,
                      "end": 459,
                      "decorators": [],
                      "name": "Named",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "ObjectPattern",
                "start": 461,
                "end": 484,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 463,
                    "end": 475,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 463,
                      "end": 467,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 475,
                      "decorators": [],
                      "name": "alias2",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 477,
                  "end": 484,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 479,
                    "end": 484,
                    "typeName": {
                      "type": "Identifier",
                      "start": 479,
                      "end": 484,
                      "decorators": [],
                      "name": "Named",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 494,
      "end": 509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 498,
          "end": 508,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 503,
            "decorators": [],
            "name": "value",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 506,
            "end": 508,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 573,
      "end": 659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 579,
          "end": 658,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 579,
            "end": 595,
            "decorators": [],
            "name": "shadowedVariable",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 598,
            "end": 658,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 653,
              "end": 658,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 599,
                "end": 634,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 601,
                    "end": 613,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 601,
                      "end": 606,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 608,
                      "end": 613,
                      "decorators": [],
                      "name": "alias",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 615,
                  "end": 634,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 617,
                    "end": 634,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 619,
                        "end": 632,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 619,
                          "end": 624,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 624,
                          "end": 632,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 626,
                            "end": 632
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 635,
              "end": 649,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 637,
                "end": 649,
                "exprName": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 649,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
