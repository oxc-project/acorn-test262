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
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 60,
            "name": "IHasGetSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "extends": [],
          "typeParameters": null,
          "body": {
            "type": "TSInterfaceBody",
            "start": 61,
            "end": 132,
            "body": [
              {
                "type": "TSMethodSignature",
                "start": 71,
                "end": 89,
                "key": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 78,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
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
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSMethodSignature",
                "start": 98,
                "end": 126,
                "key": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 105,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 106,
                    "end": 124,
                    "name": "v",
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
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false
              }
            ]
          },
          "declare": false
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
              "id": {
                "type": "Identifier",
                "start": 148,
                "end": 164,
                "name": "ihgs",
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
                      "name": "IHasGetSet",
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
                "type": "TSAsExpression",
                "start": 167,
                "end": 178,
                "expression": {
                  "type": "Literal",
                  "start": 167,
                  "end": 171,
                  "value": null,
                  "raw": "null"
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 175,
                  "end": 178
                }
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
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
              "object": {
                "type": "Identifier",
                "start": 184,
                "end": 188,
                "name": "ihgs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 189,
                "end": 192,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 195,
              "end": 199,
              "value": "32",
              "raw": "\"32\""
            }
          },
          "directive": null
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
              "id": {
                "type": "Identifier",
                "start": 209,
                "end": 227,
                "name": "r_ihgs_foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 219,
                  "end": 227,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 221,
                    "end": 227
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "MemberExpression",
                "start": 230,
                "end": 238,
                "object": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 234,
                  "name": "ihgs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 238,
                  "name": "foo",
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
          "kind": "let",
          "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 265,
            "name": "T_HasGetSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeParameters": null,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "start": 268,
            "end": 339,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 278,
                "end": 296,
                "key": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 285,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
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
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSMethodSignature",
                "start": 305,
                "end": 333,
                "key": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 312,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 313,
                    "end": 331,
                    "name": "v",
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
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false
              }
            ]
          },
          "declare": false
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
              "id": {
                "type": "Identifier",
                "start": 355,
                "end": 373,
                "name": "t_hgs",
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
                      "name": "T_HasGetSet",
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
                "type": "TSAsExpression",
                "start": 376,
                "end": 387,
                "expression": {
                  "type": "Literal",
                  "start": 376,
                  "end": 380,
                  "value": null,
                  "raw": "null"
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 384,
                  "end": 387
                }
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
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
              "object": {
                "type": "Identifier",
                "start": 393,
                "end": 398,
                "name": "t_hgs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 399,
                "end": 402,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 405,
              "end": 409,
              "value": "32",
              "raw": "\"32\""
            }
          },
          "directive": null
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
              "id": {
                "type": "Identifier",
                "start": 419,
                "end": 438,
                "name": "r_t_hgs_foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 430,
                  "end": 438,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 432,
                    "end": 438
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "MemberExpression",
                "start": 441,
                "end": 450,
                "object": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 446,
                  "name": "t_hgs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 450,
                  "name": "foo",
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
          "kind": "let",
          "declare": false
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
