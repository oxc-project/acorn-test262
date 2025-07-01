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
        "name": "ConstantIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 82
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 83,
            "end": 84
          }
        ],
        "start": 82,
        "end": 85
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 110
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 112
                },
                "typeArguments": null,
                "start": 111,
                "end": 112
              },
              {
                "type": "TSVoidKeyword",
                "start": 114,
                "end": 118
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 121
                    },
                    "typeArguments": null,
                    "start": 120,
                    "end": 121
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 124,
                    "end": 133
                  }
                ],
                "start": 120,
                "end": 133
              }
            ],
            "start": 110,
            "end": 134
          },
          "start": 97,
          "end": 134
        }
      ],
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
              "start": 141,
              "end": 152
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constant",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 172
                        },
                        "typeArguments": null,
                        "start": 171,
                        "end": 172
                      },
                      "start": 169,
                      "end": 172
                    },
                    "start": 161,
                    "end": 172
                  },
                  "readonly": false,
                  "static": false,
                  "start": 153,
                  "end": 172
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 174,
                "end": 181
              },
              "expression": false,
              "start": 152,
              "end": 181
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 141,
            "end": 181
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 196
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 206
                      },
                      "typeArguments": null,
                      "start": 205,
                      "end": 206
                    },
                    "start": 203,
                    "end": 206
                  },
                  "start": 197,
                  "end": 206
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 216
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IteratorResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 217,
                          "end": 231
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 232,
                                "end": 233
                              },
                              "typeArguments": null,
                              "start": 232,
                              "end": 233
                            }
                          ],
                          "start": 231,
                          "end": 234
                        },
                        "start": 217,
                        "end": 234
                      }
                    ],
                    "start": 216,
                    "end": 235
                  },
                  "start": 209,
                  "end": 235
                },
                "start": 207,
                "end": 235
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 250,
                        "end": 255
                      },
                      "operator": "!=",
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 259,
                        "end": 263
                      },
                      "start": 250,
                      "end": 263
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 289,
                              "end": 294
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "ConstantIterator.prototype.next may not take any values",
                                "raw": "\"ConstantIterator.prototype.next may not take any values\"",
                                "start": 295,
                                "end": 352
                              }
                            ],
                            "start": 285,
                            "end": 353
                          },
                          "start": 279,
                          "end": 354
                        }
                      ],
                      "start": 265,
                      "end": 364
                    },
                    "alternate": null,
                    "start": 246,
                    "end": 364
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 382,
                            "end": 387
                          },
                          "value": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 389,
                              "end": 393
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "constant",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 394,
                              "end": 402
                            },
                            "optional": false,
                            "computed": false,
                            "start": 389,
                            "end": 402
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 382,
                          "end": 402
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 404,
                            "end": 408
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 410,
                            "end": 415
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 404,
                          "end": 415
                        }
                      ],
                      "start": 380,
                      "end": 417
                    },
                    "start": 373,
                    "end": 418
                  }
                ],
                "start": 236,
                "end": 424
              },
              "expression": false,
              "start": 196,
              "end": 424
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 186,
            "end": 424
          }
        ],
        "start": 135,
        "end": 426
      },
      "abstract": false,
      "declare": false,
      "start": 60,
      "end": 426
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 426
}
```
