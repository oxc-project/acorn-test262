__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 498,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 359,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 359,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 27,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 46,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 226,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 63,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 226,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 226,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 76,
                    "end": 86,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 80,
                        "end": 85,
                        "id": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 81,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 84,
                          "end": 85,
                          "value": 0,
                          "raw": "0"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 100,
                        "end": 101,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
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
                        "object": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 132,
                          "decorators": [],
                          "name": "C1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 137,
                        "end": 138,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 169,
                    "expression": {
                      "type": "CallExpression",
                      "start": 165,
                      "end": 168,
                      "callee": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 197,
                    "end": 204,
                    "expression": {
                      "type": "CallExpression",
                      "start": 197,
                      "end": 203,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 197,
                        "end": 201,
                        "object": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 199,
                          "decorators": [],
                          "name": "C1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 201,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 232,
            "end": 357,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 240,
              "end": 357,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 257,
                        "end": 258,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 287,
                          "end": 291
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 292,
                          "end": 293,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 296,
                        "end": 297,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "directive": null
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
                        "object": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 328,
                          "decorators": [],
                          "name": "C1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 329,
                          "end": 330,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 333,
                        "end": 334,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 361,
      "end": 497,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 369,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 370,
        "end": 497,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 374,
            "end": 394,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 381,
              "decorators": [],
              "name": "barback",
              "optional": false,
              "typeAnnotation": null
            },
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
              "value": "",
              "raw": "\"\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 400,
            "end": 432,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 411,
              "end": 414,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 414,
              "end": 432,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 441,
            "end": 484,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 455,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 455,
              "end": 484,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              ],
              "returnType": null,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 479,
                        "end": 482,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
