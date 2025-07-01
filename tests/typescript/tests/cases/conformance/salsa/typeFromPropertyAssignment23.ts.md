__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 25
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 39,
                          "end": 43
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 44,
                          "end": 45
                        },
                        "optional": false,
                        "computed": false,
                        "start": 39,
                        "end": 45
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 48,
                        "end": 49
                      },
                      "start": 39,
                      "end": 49
                    },
                    "directive": null,
                    "start": 39,
                    "end": 49
                  }
                ],
                "start": 29,
                "end": 55
              },
              "expression": false,
              "start": 26,
              "end": 55
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 55
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 63
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 66,
                "end": 73
              },
              "expression": false,
              "start": 63,
              "end": 73
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 60,
            "end": 73
          }
        ],
        "start": 8,
        "end": 75
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 75
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 84
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 94
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 95,
        "end": 98
      },
      "abstract": false,
      "declare": false,
      "start": 77,
      "end": 98
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 161
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 171
            },
            "optional": false,
            "computed": false,
            "start": 160,
            "end": 171
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 175
          },
          "optional": false,
          "computed": false,
          "start": 160,
          "end": 175
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 189,
            "end": 192
          },
          "expression": false,
          "start": 178,
          "end": 192
        },
        "start": 160,
        "end": 192
      },
      "directive": null,
      "start": 160,
      "end": 192
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 201
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 211
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 212,
        "end": 215
      },
      "abstract": false,
      "declare": false,
      "start": 194,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 217
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 227
            },
            "optional": false,
            "computed": false,
            "start": 216,
            "end": 227
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 231
          },
          "optional": false,
          "computed": false,
          "start": 216,
          "end": 231
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 247,
                      "end": 251
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 253
                    },
                    "optional": false,
                    "computed": false,
                    "start": 247,
                    "end": 253
                  },
                  "right": {
                    "type": "Literal",
                    "value": "not checked, so no error",
                    "raw": "'not checked, so no error'",
                    "start": 256,
                    "end": 282
                  },
                  "start": 247,
                  "end": 282
                },
                "directive": null,
                "start": 247,
                "end": 282
              }
            ],
            "start": 241,
            "end": 284
          },
          "id": null,
          "generator": false,
          "start": 234,
          "end": 284
        },
        "start": 216,
        "end": 284
      },
      "directive": null,
      "start": 216,
      "end": 284
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Module",
        "optional": false,
        "typeAnnotation": null,
        "start": 382,
        "end": 388
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 389,
        "end": 392
      },
      "abstract": false,
      "declare": false,
      "start": 376,
      "end": 392
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Module",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 399
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 409
            },
            "optional": false,
            "computed": false,
            "start": 393,
            "end": 409
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "identifier",
            "optional": false,
            "typeAnnotation": null,
            "start": 410,
            "end": 420
          },
          "optional": false,
          "computed": false,
          "start": 393,
          "end": 420
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 423,
          "end": 432
        },
        "start": 393,
        "end": 432
      },
      "directive": null,
      "start": 393,
      "end": 432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Module",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 439
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 449
            },
            "optional": false,
            "computed": false,
            "start": 433,
            "end": 449
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "size",
            "optional": false,
            "typeAnnotation": null,
            "start": 450,
            "end": 454
          },
          "optional": false,
          "computed": false,
          "start": 433,
          "end": 454
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 457,
          "end": 461
        },
        "start": 433,
        "end": 461
      },
      "directive": null,
      "start": 433,
      "end": 461
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NormalModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 481
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Module",
        "optional": false,
        "typeAnnotation": null,
        "start": 490,
        "end": 496
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "identifier",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 513
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "normal",
                      "raw": "'normal'",
                      "start": 533,
                      "end": 541
                    },
                    "start": 526,
                    "end": 541
                  }
                ],
                "start": 516,
                "end": 547
              },
              "expression": false,
              "start": 513,
              "end": 547
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 503,
            "end": 547
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 556
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 576,
                      "end": 577
                    },
                    "start": 569,
                    "end": 577
                  }
                ],
                "start": 559,
                "end": 583
              },
              "expression": false,
              "start": 556,
              "end": 583
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 552,
            "end": 583
          }
        ],
        "start": 497,
        "end": 585
      },
      "abstract": false,
      "declare": false,
      "start": 463,
      "end": 585
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 585
}
```
