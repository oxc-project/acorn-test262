__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 794,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 11,
        "end": 104,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 34,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 18,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 33,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 20,
                "end": 33,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 29,
                    "end": 33
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 49,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 42,
                "end": 48
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 102,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 58,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 60,
                "end": 102,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 66,
                    "end": 76,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 67,
                      "end": 75,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 69,
                        "end": 75
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 81,
                    "end": 98,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 82,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 84,
                        "end": 97,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 84,
                            "end": 90
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 93,
                            "end": 97
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 122,
            "name": "aFoo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 122,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 122,
                  "name": "foo",
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
            "start": 125,
            "end": 171,
            "properties": [
              {
                "type": "Property",
                "start": 127,
                "end": 133,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 130,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 132,
                  "end": 133,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 135,
                "end": 143,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 138,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 140,
                  "end": 143,
                  "value": "b",
                  "raw": "\"b\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 145,
                "end": 169,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 151,
                  "name": "nested",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 153,
                  "end": 169,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 155,
                      "end": 159,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 158,
                        "end": 159,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 161,
                      "end": 167,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 162,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 164,
                        "end": 167,
                        "value": "y",
                        "raw": "\"y\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 174,
      "end": 412,
      "test": {
        "type": "LogicalExpression",
        "start": 178,
        "end": 203,
        "left": {
          "type": "MemberExpression",
          "start": 178,
          "end": 186,
          "object": {
            "type": "Identifier",
            "start": 178,
            "end": 182,
            "name": "aFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 183,
            "end": 186,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "start": 190,
          "end": 203,
          "object": {
            "type": "MemberExpression",
            "start": 190,
            "end": 201,
            "object": {
              "type": "Identifier",
              "start": 190,
              "end": 194,
              "name": "aFoo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 195,
              "end": 201,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 205,
        "end": 412,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 209,
            "end": 257,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 215,
                "end": 256,
                "id": {
                  "type": "ObjectPattern",
                  "start": 215,
                  "end": 249,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 217,
                      "end": 220,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 220,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 220,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 222,
                      "end": 225,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 225,
                        "name": "baz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 225,
                        "name": "baz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 227,
                      "end": 247,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 233,
                        "name": "nested",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "start": 235,
                        "end": 247,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 236,
                            "end": 237,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 236,
                              "end": 237,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 236,
                              "end": 237,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 239,
                            "end": 246,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 239,
                              "end": 240,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 242,
                              "end": 246,
                              "name": "text",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 256,
                  "name": "aFoo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 260,
            "end": 291,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 266,
                "end": 290,
                "id": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 279,
                  "name": "right",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 271,
                    "end": 279,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 273,
                      "end": 279
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 282,
                  "end": 290,
                  "object": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 286,
                    "name": "aFoo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 290,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 294,
            "end": 320,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 300,
                "end": 319,
                "id": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 313,
                  "name": "wrong",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 305,
                    "end": 313,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 307,
                      "end": 313
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 319,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 323,
            "end": 351,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 329,
                "end": 350,
                "id": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 344,
                  "name": "another",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 336,
                    "end": 344,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 338,
                      "end": 344
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 350,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 354,
            "end": 379,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 360,
                "end": 378,
                "id": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 374,
                  "name": "aAgain",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 366,
                    "end": 374,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 368,
                      "end": 374
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 378,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 382,
            "end": 410,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 388,
                "end": 409,
                "id": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 402,
                  "name": "bAgain",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 394,
                    "end": 402,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 396,
                      "end": 402
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 409,
                  "name": "text",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 414,
      "end": 474,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 422,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 425,
        "end": 473,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 429,
            "end": 450,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 429,
              "end": 434,
              "name": "elem1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 434,
              "end": 449,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 436,
                "end": 449,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 436,
                    "end": 442
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 445,
                    "end": 449
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 453,
            "end": 471,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 453,
              "end": 458,
              "name": "elem2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 458,
              "end": 470,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 460,
                "end": 470,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 460,
                    "end": 463,
                    "typeName": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 463,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 466,
                    "end": 470
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 476,
      "end": 515,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 514,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 486,
            "name": "bBar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 489,
            "end": 514,
            "properties": [
              {
                "type": "Property",
                "start": 491,
                "end": 499,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 491,
                  "end": 496,
                  "name": "elem1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 498,
                  "end": 499,
                  "value": 7,
                  "raw": "7"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 501,
                "end": 512,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 506,
                  "name": "elem2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 512,
                  "name": "aFoo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 517,
      "end": 793,
      "test": {
        "type": "LogicalExpression",
        "start": 521,
        "end": 572,
        "left": {
          "type": "LogicalExpression",
          "start": 521,
          "end": 549,
          "left": {
            "type": "MemberExpression",
            "start": 521,
            "end": 531,
            "object": {
              "type": "Identifier",
              "start": 521,
              "end": 525,
              "name": "bBar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 526,
              "end": 531,
              "name": "elem2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 535,
            "end": 549,
            "object": {
              "type": "MemberExpression",
              "start": 535,
              "end": 545,
              "object": {
                "type": "Identifier",
                "start": 535,
                "end": 539,
                "name": "bBar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 540,
                "end": 545,
                "name": "elem2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 546,
              "end": 549,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "start": 553,
          "end": 572,
          "object": {
            "type": "MemberExpression",
            "start": 553,
            "end": 570,
            "object": {
              "type": "MemberExpression",
              "start": 553,
              "end": 563,
              "object": {
                "type": "Identifier",
                "start": 553,
                "end": 557,
                "name": "bBar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 558,
                "end": 563,
                "name": "elem2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 564,
              "end": 570,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 571,
            "end": 572,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 574,
        "end": 793,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 578,
            "end": 632,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 584,
                "end": 631,
                "id": {
                  "type": "ObjectPattern",
                  "start": 584,
                  "end": 618,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 586,
                      "end": 589,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 589,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 589,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 591,
                      "end": 594,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 591,
                        "end": 594,
                        "name": "baz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 591,
                        "end": 594,
                        "name": "baz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 596,
                      "end": 616,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 596,
                        "end": 602,
                        "name": "nested",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "start": 604,
                        "end": 616,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 605,
                            "end": 606,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 605,
                              "end": 606,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 605,
                              "end": 606,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 608,
                            "end": 615,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 608,
                              "end": 609,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 611,
                              "end": 615,
                              "name": "text",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 621,
                  "end": 631,
                  "object": {
                    "type": "Identifier",
                    "start": 621,
                    "end": 625,
                    "name": "bBar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 626,
                    "end": 631,
                    "name": "elem2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 635,
            "end": 672,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 641,
                "end": 671,
                "id": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 654,
                  "name": "right",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 646,
                    "end": 654,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 648,
                      "end": 654
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 657,
                  "end": 671,
                  "object": {
                    "type": "MemberExpression",
                    "start": 657,
                    "end": 667,
                    "object": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 661,
                      "name": "bBar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 662,
                      "end": 667,
                      "name": "elem2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 668,
                    "end": 671,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 675,
            "end": 701,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 681,
                "end": 700,
                "id": {
                  "type": "Identifier",
                  "start": 681,
                  "end": 694,
                  "name": "wrong",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 686,
                    "end": 694,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 688,
                      "end": 694
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 697,
                  "end": 700,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 704,
            "end": 732,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 710,
                "end": 731,
                "id": {
                  "type": "Identifier",
                  "start": 710,
                  "end": 725,
                  "name": "another",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 717,
                    "end": 725,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 719,
                      "end": 725
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 728,
                  "end": 731,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 735,
            "end": 760,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 741,
                "end": 759,
                "id": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 755,
                  "name": "aAgain",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 747,
                    "end": 755,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 749,
                      "end": 755
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 758,
                  "end": 759,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 763,
            "end": 791,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 769,
                "end": 790,
                "id": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 783,
                  "name": "bAgain",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 775,
                    "end": 783,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 777,
                      "end": 783
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 790,
                  "name": "text",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
