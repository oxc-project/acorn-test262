__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 60,
  "end": 426,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 60,
      "end": 426,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 82,
        "decorators": [],
        "name": "ConstantIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 97,
          "end": 134,
          "expression": {
            "type": "Identifier",
            "start": 97,
            "end": 110,
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 110,
            "end": 134,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 111,
                "end": 112,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSVoidKeyword",
                "start": 114,
                "end": 118
              },
              {
                "type": "TSUnionType",
                "start": 120,
                "end": 133,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 120,
                    "end": 121,
                    "typeName": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 121,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 124,
                    "end": 133
                  }
                ]
              }
            ]
          }
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 135,
        "end": 426,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 141,
            "end": 181,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 152,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 152,
              "end": 181,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 153,
                  "end": 172,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 172,
                    "decorators": [],
                    "name": "constant",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 171,
                        "end": 172,
                        "typeName": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 172,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 174,
                "end": 181,
                "body": []
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
            "start": 186,
            "end": 424,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 196,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 424,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
                  "decorators": [],
                  "name": "value",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 203,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 205,
                      "end": 206,
                      "typeName": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 207,
                "end": 235,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 209,
                  "end": 235,
                  "typeName": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 216,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 216,
                    "end": 235,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 217,
                        "end": 234,
                        "typeName": {
                          "type": "Identifier",
                          "start": 217,
                          "end": 231,
                          "decorators": [],
                          "name": "IteratorResult",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 231,
                          "end": 234,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 232,
                              "end": 233,
                              "typeName": {
                                "type": "Identifier",
                                "start": 232,
                                "end": 233,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 236,
                "end": 424,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 246,
                    "end": 364,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 250,
                      "end": 263,
                      "left": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 255,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "!=",
                      "right": {
                        "type": "Literal",
                        "start": 259,
                        "end": 263,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 265,
                      "end": 364,
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "start": 279,
                          "end": 354,
                          "argument": {
                            "type": "NewExpression",
                            "start": 285,
                            "end": 353,
                            "callee": {
                              "type": "Identifier",
                              "start": 289,
                              "end": 294,
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 295,
                                "end": 352,
                                "value": "ConstantIterator.prototype.next may not take any values",
                                "raw": "\"ConstantIterator.prototype.next may not take any values\""
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 373,
                    "end": 418,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 380,
                      "end": 417,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 382,
                          "end": 402,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 382,
                            "end": 387,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "MemberExpression",
                            "start": 389,
                            "end": 402,
                            "object": {
                              "type": "ThisExpression",
                              "start": 389,
                              "end": 393
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 394,
                              "end": 402,
                              "decorators": [],
                              "name": "constant",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 404,
                          "end": 415,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 404,
                            "end": 408,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 410,
                            "end": 415,
                            "value": false,
                            "raw": "false"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
