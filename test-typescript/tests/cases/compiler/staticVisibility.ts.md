__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 499,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 359,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 359,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 27,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 26,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 46,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 45,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 42,
                "end": 45
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 226,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 63,
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
              "start": 63,
              "end": 226,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 226,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 76,
                    "end": 86,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 80,
                        "end": 85,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 81,
                          "decorators": [],
                          "name": "v",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 84,
                          "end": 85,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 96,
                    "end": 102,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 96,
                      "end": 101,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 100,
                        "end": 101,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 130,
                    "end": 139,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 130,
                      "end": 138,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 130,
                        "end": 134,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 132,
                          "decorators": [],
                          "name": "C1",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
                          "decorators": [],
                          "name": "s",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 137,
                        "end": 138,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 169,
                    "expression": {
                      "type": "CallExpression",
                      "start": 165,
                      "end": 168,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 197,
                    "end": 204,
                    "expression": {
                      "type": "CallExpression",
                      "start": 197,
                      "end": 203,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 197,
                        "end": 201,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 199,
                          "decorators": [],
                          "name": "C1",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 201,
                          "decorators": [],
                          "name": "b",
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
          },
          {
            "type": "MethodDefinition",
            "start": 232,
            "end": 357,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 240,
              "end": 357,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 243,
                "end": 357,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 253,
                    "end": 259,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 253,
                      "end": 258,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 254,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 257,
                        "end": 258,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 287,
                    "end": 298,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 287,
                      "end": 297,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 287,
                        "end": 293,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 287,
                          "end": 291
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 292,
                          "end": 293,
                          "decorators": [],
                          "name": "p",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 296,
                        "end": 297,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 326,
                    "end": 335,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 326,
                      "end": 334,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 326,
                        "end": 330,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 328,
                          "decorators": [],
                          "name": "C1",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 329,
                          "end": 330,
                          "decorators": [],
                          "name": "s",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 333,
                        "end": 334,
                        "raw": "1",
                        "value": 1
                      }
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
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 361,
      "end": 497,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 370,
        "end": 497,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 374,
            "end": 394,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 381,
              "decorators": [],
              "name": "barback",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 381,
              "end": 388,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 382,
                "end": 388
              }
            },
            "value": {
              "type": "Literal",
              "start": 391,
              "end": 393,
              "raw": "\"\"",
              "value": ""
            }
          },
          {
            "type": "MethodDefinition",
            "start": 400,
            "end": 432,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 411,
              "end": 414,
              "decorators": [],
              "name": "Bar",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 414,
              "end": 432,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 417,
                "end": 432,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 418,
                    "end": 431,
                    "argument": {
                      "type": "Literal",
                      "start": 425,
                      "end": 430,
                      "raw": "\"bar\"",
                      "value": "bar"
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
          },
          {
            "type": "MethodDefinition",
            "start": 441,
            "end": 484,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 455,
              "decorators": [],
              "name": "Bar",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 455,
              "end": 484,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 468,
                "end": 484,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 469,
                    "end": 483,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 469,
                      "end": 482,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 469,
                        "end": 476,
                        "decorators": [],
                        "name": "barback",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 479,
                        "end": 482,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 456,
                  "end": 466,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 459,
                    "end": 466,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 460,
                      "end": 466
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 369,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
