__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 488,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 155,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 53,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 53,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 53,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 41,
                    "end": 47,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 45,
                        "end": 46,
                        "id": {
                          "type": "Identifier",
                          "start": 45,
                          "end": 46,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "start": 58,
            "end": 101,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 68,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 101,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 153,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 117,
              "end": 153,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "start": 157,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 167,
        "name": "Sub1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 180,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 181,
        "end": 260,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 187,
            "end": 258,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 197,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 258,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                              "name": "foo",
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
                            "name": "bar",
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
                      }
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
            "accessibility": "public"
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
      "start": 263,
      "end": 358,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 276,
        "name": "SubSub1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 285,
        "end": 289,
        "name": "Sub1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 290,
        "end": 358,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 296,
            "end": 356,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 306,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 306,
              "end": 356,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                            "name": "foo",
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
                      }
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
            "accessibility": "public"
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
      "start": 360,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 371,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 372,
        "end": 421,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 378,
            "end": 419,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 385,
              "end": 388,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 419,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "foo",
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
            "accessibility": "public"
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
      "type": "VariableDeclaration",
      "start": 423,
      "end": 442,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 441,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 428,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 431,
            "end": 441,
            "callee": {
              "type": "Identifier",
              "start": 435,
              "end": 439,
              "name": "Sub1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 443,
      "end": 466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 447,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 447,
            "end": 449,
            "name": "ss",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 452,
            "end": 465,
            "callee": {
              "type": "Identifier",
              "start": 456,
              "end": 463,
              "name": "SubSub1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 469,
              "end": 472,
              "name": "foo",
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
              "name": "ss",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 480,
              "end": 483,
              "name": "foo",
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
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
