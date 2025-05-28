__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 487,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 155,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 155,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 53,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 53,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 53,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 41,
                    "end": 47,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 45,
                        "end": 46,
                        "id": {
                          "type": "Identifier",
                          "start": 45,
                          "end": 46,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "start": 58,
            "end": 101,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 68,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 101,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 101,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 81,
                    "end": 95,
                    "argument": {
                      "type": "Literal",
                      "start": 88,
                      "end": 94,
                      "value": "base",
                      "raw": "\"base\""
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 153,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 117,
              "end": 153,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 120,
                "end": 153,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 130,
                    "end": 147,
                    "argument": {
                      "type": "Literal",
                      "start": 137,
                      "end": 146,
                      "value": "basebar",
                      "raw": "\"basebar\""
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 157,
      "end": 260,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 167,
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 180,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 181,
        "end": 260,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 187,
            "end": 258,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 197,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 258,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 258,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 210,
                    "end": 252,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 217,
                      "end": 251,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 217,
                        "end": 237,
                        "left": {
                          "type": "Literal",
                          "start": 217,
                          "end": 223,
                          "value": "sub1",
                          "raw": "\"sub1\""
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "start": 226,
                          "end": 237,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 226,
                            "end": 235,
                            "object": {
                              "type": "Super",
                              "start": 226,
                              "end": 231
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 232,
                              "end": 235,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "start": 240,
                        "end": 251,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 240,
                          "end": 249,
                          "object": {
                            "type": "Super",
                            "start": 240,
                            "end": 245
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 246,
                            "end": 249,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 263,
      "end": 358,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 276,
        "decorators": [],
        "name": "SubSub1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 285,
        "end": 289,
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 290,
        "end": 358,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 296,
            "end": 356,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 306,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 306,
              "end": 356,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 309,
                "end": 356,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 319,
                    "end": 350,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 326,
                      "end": 349,
                      "left": {
                        "type": "Literal",
                        "start": 326,
                        "end": 335,
                        "value": "subsub1",
                        "raw": "\"subsub1\""
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "start": 338,
                        "end": 349,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 338,
                          "end": 347,
                          "object": {
                            "type": "Super",
                            "start": 338,
                            "end": 343
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 344,
                            "end": 347,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 360,
      "end": 421,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 371,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 372,
        "end": 421,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 378,
            "end": 419,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 385,
              "end": 388,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 419,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 391,
                "end": 419,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 401,
                    "end": 413,
                    "expression": {
                      "type": "CallExpression",
                      "start": 401,
                      "end": 412,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 401,
                        "end": 410,
                        "object": {
                          "type": "Super",
                          "start": 401,
                          "end": 406
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 407,
                          "end": 410,
                          "decorators": [],
                          "name": "foo",
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 442,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 441,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 428,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 431,
            "end": 441,
            "callee": {
              "type": "Identifier",
              "start": 435,
              "end": 439,
              "decorators": [],
              "name": "Sub1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 443,
      "end": 466,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 447,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 447,
            "end": 449,
            "decorators": [],
            "name": "ss",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 452,
            "end": 465,
            "callee": {
              "type": "Identifier",
              "start": 456,
              "end": 463,
              "decorators": [],
              "name": "SubSub1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 467,
      "end": 486,
      "expression": {
        "type": "BinaryExpression",
        "start": 467,
        "end": 485,
        "left": {
          "type": "CallExpression",
          "start": 467,
          "end": 474,
          "callee": {
            "type": "MemberExpression",
            "start": 467,
            "end": 472,
            "object": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 469,
              "end": 472,
              "decorators": [],
              "name": "foo",
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
        "operator": "+",
        "right": {
          "type": "CallExpression",
          "start": 477,
          "end": 485,
          "callee": {
            "type": "MemberExpression",
            "start": 477,
            "end": 483,
            "object": {
              "type": "Identifier",
              "start": 477,
              "end": 479,
              "decorators": [],
              "name": "ss",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 480,
              "end": 483,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
