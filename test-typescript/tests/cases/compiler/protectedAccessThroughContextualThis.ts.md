__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 450,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 151,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 151,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 39,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 30,
              "decorators": [],
              "name": "protec",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 33,
              "end": 38,
              "raw": "'bar'",
              "value": "bar"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 42,
            "end": 62,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 56,
              "decorators": [],
              "name": "privat",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 59,
              "end": 61,
              "raw": "''",
              "value": ""
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 78,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 69,
              "decorators": [],
              "name": "copy",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 78,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 149,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 92,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 149,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 149,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 101,
                    "end": 120,
                    "expression": {
                      "type": "CallExpression",
                      "start": 101,
                      "end": 120,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 115,
                          "end": 119
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 101,
                        "end": 114,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 109,
                          "decorators": [],
                          "name": "bindCopy",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 114,
                          "decorators": [],
                          "name": "call",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 125,
                    "end": 145,
                    "expression": {
                      "type": "CallExpression",
                      "start": 125,
                      "end": 145,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 140,
                          "end": 144
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 125,
                        "end": 139,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 134,
                          "decorators": [],
                          "name": "bindCopy2",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 139,
                          "decorators": [],
                          "name": "call",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 269,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 269,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 210,
            "expression": {
              "type": "AssignmentExpression",
              "start": 186,
              "end": 209,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 186,
                "end": 195,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 186,
                  "end": 190
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 195,
                  "decorators": [],
                  "name": "copy",
                  "optional": false
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 198,
                "end": 209,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 198,
                  "end": 202
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 209,
                  "decorators": [],
                  "name": "protec",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 226,
            "end": 251,
            "expression": {
              "type": "CallExpression",
              "start": 226,
              "end": 250,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 238,
                  "end": 249,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 238,
                    "end": 242
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 249,
                    "decorators": [],
                    "name": "privat",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 226,
                "end": 237,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 233,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 237,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 170,
        "decorators": [],
        "name": "bindCopy",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 171,
          "end": 180,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 175,
            "end": 180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 180,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 271,
      "end": 314,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 291,
        "decorators": [],
        "name": "BindingFunction",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 294,
        "end": 313,
        "params": [
          {
            "type": "Identifier",
            "start": 295,
            "end": 304,
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 304,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 301,
                "end": 304,
                "typeName": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 304,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 306,
          "end": 313,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 309,
            "end": 313
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 316,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 450,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 348,
            "decorators": [],
            "name": "bindCopy2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 348,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 333,
                "end": 348,
                "typeName": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 348,
                  "decorators": [],
                  "name": "BindingFunction",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 351,
            "end": 450,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 363,
              "end": 450,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 367,
                  "end": 391,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 367,
                    "end": 390,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 367,
                      "end": 376,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 367,
                        "end": 371
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 372,
                        "end": 376,
                        "decorators": [],
                        "name": "copy",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 379,
                      "end": 390,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 379,
                        "end": 383
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 384,
                        "end": 390,
                        "decorators": [],
                        "name": "protec",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 407,
                  "end": 432,
                  "expression": {
                    "type": "CallExpression",
                    "start": 407,
                    "end": 431,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 419,
                        "end": 430,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 419,
                          "end": 423
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 424,
                          "end": 430,
                          "decorators": [],
                          "name": "privat",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 407,
                      "end": 418,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 407,
                        "end": 414,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 415,
                        "end": 418,
                        "decorators": [],
                        "name": "log",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
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
