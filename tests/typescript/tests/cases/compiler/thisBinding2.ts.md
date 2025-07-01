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
        "name": "C",
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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 14,
                "end": 20
              },
              "start": 12,
              "end": 20
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 11,
            "end": 21
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 37
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
                          "start": 50,
                          "end": 54
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 55,
                          "end": 56
                        },
                        "optional": false,
                        "computed": false,
                        "start": 50,
                        "end": 56
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
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
                                "type": "VariableDeclaration",
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 75,
                                      "end": 76
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 79,
                                      "end": 80
                                    },
                                    "definite": false,
                                    "start": 75,
                                    "end": 80
                                  }
                                ],
                                "declare": false,
                                "start": 71,
                                "end": 81
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 92,
                                    "end": 96
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 97,
                                    "end": 98
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 92,
                                  "end": 98
                                },
                                "start": 85,
                                "end": 99
                              }
                            ],
                            "start": 66,
                            "end": 103
                          },
                          "id": null,
                          "generator": false,
                          "start": 60,
                          "end": 103
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 59,
                        "end": 106
                      },
                      "start": 50,
                      "end": 106
                    },
                    "directive": null,
                    "start": 50,
                    "end": 107
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 110,
                          "end": 114
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 115,
                          "end": 116
                        },
                        "optional": false,
                        "computed": false,
                        "start": 110,
                        "end": 116
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
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
                                "type": "VariableDeclaration",
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 139,
                                      "end": 140
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 143,
                                      "end": 144
                                    },
                                    "definite": false,
                                    "start": 139,
                                    "end": 144
                                  }
                                ],
                                "declare": false,
                                "start": 135,
                                "end": 145
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 156,
                                    "end": 160
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 161,
                                    "end": 162
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 156,
                                  "end": 162
                                },
                                "start": 149,
                                "end": 163
                              }
                            ],
                            "start": 130,
                            "end": 167
                          },
                          "expression": false,
                          "start": 119,
                          "end": 167
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 119,
                        "end": 169
                      },
                      "start": 110,
                      "end": 169
                    },
                    "directive": null,
                    "start": 110,
                    "end": 170
                  }
                ],
                "start": 40,
                "end": 176
              },
              "expression": false,
              "start": 37,
              "end": 176
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 26,
            "end": 176
          }
        ],
        "start": 8,
        "end": 180
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 180
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setTimeout",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 208
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "expression",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 221,
              "end": 224
            },
            "start": 219,
            "end": 224
          },
          "start": 209,
          "end": 224
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "msec",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 233,
              "end": 239
            },
            "start": 231,
            "end": 239
          },
          "start": 226,
          "end": 239
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "language",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 252,
              "end": 255
            },
            "start": 250,
            "end": 255
          },
          "start": 241,
          "end": 255
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 258,
          "end": 264
        },
        "start": 256,
        "end": 264
      },
      "body": null,
      "expression": false,
      "start": 181,
      "end": 265
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "messenger",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 279
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 295
                },
                "value": {
                  "type": "Literal",
                  "value": "Hello World",
                  "raw": "\"Hello World\"",
                  "start": 297,
                  "end": 310
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 288,
                "end": 310
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 321
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "setTimeout",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 352,
                            "end": 362
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
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
                                    "type": "VariableDeclaration",
                                    "kind": "var",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 375,
                                          "end": 376
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 379,
                                            "end": 383
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "message",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 384,
                                            "end": 391
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 379,
                                          "end": 391
                                        },
                                        "definite": false,
                                        "start": 375,
                                        "end": 391
                                      }
                                    ],
                                    "declare": false,
                                    "start": 371,
                                    "end": 392
                                  }
                                ],
                                "start": 369,
                                "end": 394
                              },
                              "id": null,
                              "generator": false,
                              "start": 363,
                              "end": 394
                            },
                            {
                              "type": "Literal",
                              "value": 3000,
                              "raw": "3000",
                              "start": 396,
                              "end": 400
                            }
                          ],
                          "optional": false,
                          "start": 352,
                          "end": 401
                        },
                        "start": 345,
                        "end": 402
                      }
                    ],
                    "start": 335,
                    "end": 408
                  },
                  "expression": false,
                  "start": 323,
                  "end": 408
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 316,
                "end": 408
              }
            ],
            "start": 282,
            "end": 410
          },
          "definite": false,
          "start": 270,
          "end": 410
        }
      ],
      "declare": false,
      "start": 266,
      "end": 411
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 411
}
```
