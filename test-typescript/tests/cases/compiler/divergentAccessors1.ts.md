__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 454,
  "body": [
    {
      "type": "BlockStatement",
      "start": 34,
      "end": 241,
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "start": 40,
          "end": 132,
          "body": {
            "type": "TSInterfaceBody",
            "start": 61,
            "end": 132,
            "body": [
              {
                "type": "TSMethodSignature",
                "start": 71,
                "end": 89,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 78,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "get",
                "optional": false,
                "params": [],
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 80,
                  "end": 88,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 82,
                    "end": 88
                  }
                },
                "static": false
              },
              {
                "type": "TSMethodSignature",
                "start": 98,
                "end": 126,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 105,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "set",
                "optional": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 106,
                    "end": 124,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 107,
                      "end": 124,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 109,
                        "end": 124,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 109,
                            "end": 115
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 118,
                            "end": 124
                          }
                        ]
                      }
                    }
                  }
                ],
                "readonly": false,
                "static": false
              }
            ]
          },
          "declare": false,
          "extends": [],
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 60,
            "decorators": [],
            "name": "IHasGetSet",
            "optional": false
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 142,
          "end": 179,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 148,
              "end": 178,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 148,
                "end": 164,
                "decorators": [],
                "name": "ihgs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 152,
                  "end": 164,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 154,
                    "end": 164,
                    "typeName": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 164,
                      "decorators": [],
                      "name": "IHasGetSet",
                      "optional": false
                    }
                  }
                }
              },
              "init": {
                "type": "TSAsExpression",
                "start": 167,
                "end": 178,
                "expression": {
                  "type": "Literal",
                  "start": 167,
                  "end": 171,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 175,
                  "end": 178
                }
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "ExpressionStatement",
          "start": 184,
          "end": 200,
          "expression": {
            "type": "AssignmentExpression",
            "start": 184,
            "end": 199,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 184,
              "end": 192,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 184,
                "end": 188,
                "decorators": [],
                "name": "ihgs",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 189,
                "end": 192,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 195,
              "end": 199,
              "raw": "\"32\"",
              "value": "32"
            }
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 205,
          "end": 239,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 209,
              "end": 238,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 209,
                "end": 227,
                "decorators": [],
                "name": "r_ihgs_foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 219,
                  "end": 227,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 221,
                    "end": 227
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "start": 230,
                "end": 238,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 234,
                  "decorators": [],
                  "name": "ihgs",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 238,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              }
            }
          ],
          "declare": false,
          "kind": "let"
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 243,
      "end": 453,
      "body": [
        {
          "type": "TSTypeAliasDeclaration",
          "start": 249,
          "end": 339,
          "declare": false,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 265,
            "decorators": [],
            "name": "T_HasGetSet",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "start": 268,
            "end": 339,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 278,
                "end": 296,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 285,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "get",
                "optional": false,
                "params": [],
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 287,
                  "end": 295,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 289,
                    "end": 295
                  }
                },
                "static": false
              },
              {
                "type": "TSMethodSignature",
                "start": 305,
                "end": 333,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 312,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "set",
                "optional": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 313,
                    "end": 331,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 314,
                      "end": 331,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 316,
                        "end": 331,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 316,
                            "end": 322
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 325,
                            "end": 331
                          }
                        ]
                      }
                    }
                  }
                ],
                "readonly": false,
                "static": false
              }
            ]
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 349,
          "end": 388,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 355,
              "end": 387,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 355,
                "end": 373,
                "decorators": [],
                "name": "t_hgs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 360,
                  "end": 373,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 362,
                    "end": 373,
                    "typeName": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 373,
                      "decorators": [],
                      "name": "T_HasGetSet",
                      "optional": false
                    }
                  }
                }
              },
              "init": {
                "type": "TSAsExpression",
                "start": 376,
                "end": 387,
                "expression": {
                  "type": "Literal",
                  "start": 376,
                  "end": 380,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 384,
                  "end": 387
                }
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "ExpressionStatement",
          "start": 393,
          "end": 410,
          "expression": {
            "type": "AssignmentExpression",
            "start": 393,
            "end": 409,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 393,
              "end": 402,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 393,
                "end": 398,
                "decorators": [],
                "name": "t_hgs",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 399,
                "end": 402,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 405,
              "end": 409,
              "raw": "\"32\"",
              "value": "32"
            }
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 415,
          "end": 451,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 419,
              "end": 450,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 419,
                "end": 438,
                "decorators": [],
                "name": "r_t_hgs_foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 430,
                  "end": 438,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 432,
                    "end": 438
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "start": 441,
                "end": 450,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 446,
                  "decorators": [],
                  "name": "t_hgs",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 450,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              }
            }
          ],
          "declare": false,
          "kind": "let"
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
