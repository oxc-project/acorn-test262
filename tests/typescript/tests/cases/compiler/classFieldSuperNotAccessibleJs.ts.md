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
        "name": "YaddaBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 72
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
              "start": 79,
              "end": 90
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
                          "start": 103,
                          "end": 107
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "roots",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 113
                        },
                        "optional": false,
                        "computed": false,
                        "start": 103,
                        "end": 113
                      },
                      "right": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "\"hi\"",
                        "start": 116,
                        "end": 120
                      },
                      "start": 103,
                      "end": 120
                    },
                    "directive": null,
                    "start": 103,
                    "end": 121
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 158,
                        "end": 162
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "justProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 171
                      },
                      "optional": false,
                      "computed": false,
                      "start": 158,
                      "end": 171
                    },
                    "directive": null,
                    "start": 158,
                    "end": 172
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 209,
                        "end": 213
                      },
                      "property": {
                        "type": "Literal",
                        "value": "literalElementAccess",
                        "raw": "'literalElementAccess'",
                        "start": 214,
                        "end": 236
                      },
                      "optional": false,
                      "computed": true,
                      "start": 209,
                      "end": 237
                    },
                    "directive": null,
                    "start": 209,
                    "end": 238
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 248,
                          "end": 252
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 253,
                          "end": 254
                        },
                        "optional": false,
                        "computed": false,
                        "start": 248,
                        "end": 254
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 248,
                      "end": 256
                    },
                    "directive": null,
                    "start": 248,
                    "end": 256
                  }
                ],
                "start": 93,
                "end": 262
              },
              "expression": false,
              "start": 90,
              "end": 262
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 79,
            "end": 262
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 277
            },
            "typeAnnotation": null,
            "value": {
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
                          "start": 296,
                          "end": 300
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 301,
                          "end": 304
                        },
                        "optional": false,
                        "computed": false,
                        "start": 296,
                        "end": 304
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 307,
                        "end": 309
                      },
                      "start": 296,
                      "end": 309
                    },
                    "directive": null,
                    "start": 296,
                    "end": 309
                  }
                ],
                "start": 286,
                "end": 315
              },
              "id": null,
              "generator": false,
              "start": 280,
              "end": 315
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 267,
            "end": 315
          }
        ],
        "start": 73,
        "end": 317
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 317
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedYadda",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 337
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "YaddaBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 346,
        "end": 355
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
              "name": "rootTests",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 375
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 395,
                        "end": 400
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "roots",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 401,
                        "end": 406
                      },
                      "optional": false,
                      "computed": false,
                      "start": 395,
                      "end": 406
                    },
                    "start": 388,
                    "end": 407
                  }
                ],
                "start": 378,
                "end": 413
              },
              "expression": false,
              "start": 375,
              "end": 413
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 362,
            "end": 413
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooTests",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 430
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 450,
                        "end": 455
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 456,
                        "end": 459
                      },
                      "optional": false,
                      "computed": false,
                      "start": 450,
                      "end": 459
                    },
                    "start": 443,
                    "end": 460
                  }
                ],
                "start": 433,
                "end": 466
              },
              "expression": false,
              "start": 430,
              "end": 466
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 418,
            "end": 466
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "justPropTests",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 488
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 508,
                        "end": 513
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "justProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 522
                      },
                      "optional": false,
                      "computed": false,
                      "start": 508,
                      "end": 522
                    },
                    "start": 501,
                    "end": 523
                  }
                ],
                "start": 491,
                "end": 529
              },
              "expression": false,
              "start": 488,
              "end": 529
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 471,
            "end": 529
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "literalElementAccessTests",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 563
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 583,
                        "end": 588
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "literalElementAccess",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 609
                      },
                      "optional": false,
                      "computed": false,
                      "start": 583,
                      "end": 609
                    },
                    "start": 576,
                    "end": 610
                  }
                ],
                "start": 566,
                "end": 616
              },
              "expression": false,
              "start": 563,
              "end": 616
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 534,
            "end": 616
          }
        ],
        "start": 356,
        "end": 618
      },
      "abstract": false,
      "declare": false,
      "start": 319,
      "end": 618
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 618
}
```
