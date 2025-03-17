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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 359,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 27,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 46,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 226,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 63,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 226,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 81,
                          "name": "v",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "var",
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
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "name": "C1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "C1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 201,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 232,
            "end": 357,
            "static": true,
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
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 240,
              "end": 357,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                          "name": "C1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 329,
                          "end": 330,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 361,
      "end": 497,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 369,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 370,
        "end": 497,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 374,
            "end": 394,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 381,
              "name": "barback",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 391,
              "end": 393,
              "value": "",
              "raw": "\"\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 400,
            "end": 432,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 411,
              "end": 414,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 414,
              "end": 432,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 441,
            "end": 484,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 455,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 455,
              "end": 484,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 456,
                  "end": 466,
                  "name": "bar",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 459,
                    "end": 466,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 460,
                      "end": 466
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "barback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 479,
                        "end": 482,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
