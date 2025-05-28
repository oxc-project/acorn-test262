__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 585,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 75,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 75,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 55,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 55,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 55,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 39,
                    "end": 49,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 39,
                      "end": 49,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 39,
                        "end": 45,
                        "object": {
                          "type": "ThisExpression",
                          "start": 39,
                          "end": 43
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 44,
                          "end": 45,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 48,
                        "end": 49,
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
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 73,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 73,
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
                "end": 73,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
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
      "start": 77,
      "end": 98,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 93,
        "end": 94,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 98,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 160,
      "end": 192,
      "expression": {
        "type": "AssignmentExpression",
        "start": 160,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 160,
          "end": 175,
          "object": {
            "type": "MemberExpression",
            "start": 160,
            "end": 171,
            "object": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 162,
              "end": 171,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 172,
            "end": 175,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 178,
          "end": 192,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 189,
            "end": 192,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 194,
      "end": 215,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 210,
        "end": 211,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 212,
        "end": 215,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 284,
      "expression": {
        "type": "AssignmentExpression",
        "start": 216,
        "end": 284,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 216,
          "end": 231,
          "object": {
            "type": "MemberExpression",
            "start": 216,
            "end": 227,
            "object": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 218,
              "end": 227,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 228,
            "end": 231,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 234,
          "end": 284,
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 241,
            "end": 284,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 247,
                "end": 282,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 247,
                  "end": 282,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 247,
                    "end": 253,
                    "object": {
                      "type": "ThisExpression",
                      "start": 247,
                      "end": 251
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 253,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 256,
                    "end": 282,
                    "value": "not checked, so no error",
                    "raw": "'not checked, so no error'"
                  }
                },
                "directive": null
              }
            ]
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 376,
      "end": 392,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 382,
        "end": 388,
        "decorators": [],
        "name": "Module",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 389,
        "end": 392,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 393,
      "end": 432,
      "expression": {
        "type": "AssignmentExpression",
        "start": 393,
        "end": 432,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 393,
          "end": 420,
          "object": {
            "type": "MemberExpression",
            "start": 393,
            "end": 409,
            "object": {
              "type": "Identifier",
              "start": 393,
              "end": 399,
              "decorators": [],
              "name": "Module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 400,
              "end": 409,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 410,
            "end": 420,
            "decorators": [],
            "name": "identifier",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 423,
          "end": 432,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 461,
      "expression": {
        "type": "AssignmentExpression",
        "start": 433,
        "end": 461,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 433,
          "end": 454,
          "object": {
            "type": "MemberExpression",
            "start": 433,
            "end": 449,
            "object": {
              "type": "Identifier",
              "start": 433,
              "end": 439,
              "decorators": [],
              "name": "Module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 440,
              "end": 449,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 450,
            "end": 454,
            "decorators": [],
            "name": "size",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 457,
          "end": 461,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 463,
      "end": 585,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 481,
        "decorators": [],
        "name": "NormalModule",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 490,
        "end": 496,
        "decorators": [],
        "name": "Module",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 497,
        "end": 585,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 503,
            "end": 547,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 503,
              "end": 513,
              "decorators": [],
              "name": "identifier",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 513,
              "end": 547,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 516,
                "end": 547,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 526,
                    "end": 541,
                    "argument": {
                      "type": "Literal",
                      "start": 533,
                      "end": 541,
                      "value": "normal",
                      "raw": "'normal'"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 552,
            "end": 583,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 552,
              "end": 556,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 556,
              "end": 583,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 559,
                "end": 583,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 569,
                    "end": 577,
                    "argument": {
                      "type": "Literal",
                      "start": 576,
                      "end": 577,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
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
