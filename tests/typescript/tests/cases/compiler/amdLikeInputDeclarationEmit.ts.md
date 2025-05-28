__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "decorators": [],
        "name": "define",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 33,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 26,
              "end": 33
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 47,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 47,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 41,
              "end": 47
            }
          }
        },
        {
          "type": "Identifier",
          "start": 49,
          "end": 66,
          "decorators": [],
          "name": "modules",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 66,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 58,
              "end": 66,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 68,
          "end": 103,
          "decorators": [],
          "name": "ready",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 103,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 75,
              "end": 103,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 76,
                  "end": 97,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 86,
                    "decorators": [],
                    "name": "modules",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 88,
                      "end": 97,
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 88,
                        "end": 95
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 99,
                "end": 103,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 102,
                  "end": 103,
                  "typeName": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 145,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 31,
        "value": "deps/BaseClass",
        "raw": "\"deps/BaseClass\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 32,
        "end": 145,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 38,
            "end": 119,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 53,
              "decorators": [],
              "name": "BaseClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 54,
              "end": 119,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 64,
                  "end": 113,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 78,
                    "decorators": [],
                    "name": "extends",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 78,
                    "end": 113,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 78,
                      "end": 81,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 79,
                          "end": 80,
                          "name": {
                            "type": "Identifier",
                            "start": 79,
                            "end": 80,
                            "decorators": [],
                            "name": "A",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 82,
                        "end": 86,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 83,
                          "end": 86,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 85,
                            "end": 86,
                            "typeName": {
                              "type": "Identifier",
                              "start": 85,
                              "end": 86,
                              "decorators": [],
                              "name": "A",
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
                      "start": 87,
                      "end": 112,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 89,
                        "end": 112,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 96,
                          "end": 112,
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "start": 99,
                            "end": 112,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 99,
                                "end": 100,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 99,
                                  "end": 100,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 103,
                                "end": 112,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 103,
                                  "end": 112,
                                  "decorators": [],
                                  "name": "BaseClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    },
                    "body": null,
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
            "type": "TSExportAssignment",
            "start": 124,
            "end": 143,
            "expression": {
              "type": "Identifier",
              "start": 133,
              "end": 142,
              "decorators": [],
              "name": "BaseClass",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 461,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 461,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 460,
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 6,
          "decorators": [],
          "name": "define",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 7,
            "end": 26,
            "value": "lib/ExtendedClass",
            "raw": "\"lib/ExtendedClass\""
          },
          {
            "type": "ArrayExpression",
            "start": 28,
            "end": 46,
            "elements": [
              {
                "type": "Literal",
                "start": 29,
                "end": 45,
                "value": "deps/BaseClass",
                "raw": "\"deps/BaseClass\""
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 163,
            "end": 459,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 164,
                "end": 173,
                "decorators": [],
                "name": "BaseClass",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 178,
              "end": 459,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 193,
                  "end": 308,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 199,
                      "end": 307,
                      "id": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 212,
                        "decorators": [],
                        "name": "ExtendedClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 215,
                        "end": 307,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 215,
                          "end": 232,
                          "object": {
                            "type": "Identifier",
                            "start": 215,
                            "end": 224,
                            "decorators": [],
                            "name": "BaseClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 232,
                            "decorators": [],
                            "name": "extends",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ObjectExpression",
                            "start": 233,
                            "end": 306,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 243,
                                "end": 300,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 243,
                                  "end": 244,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 246,
                                  "end": 300,
                                  "id": null,
                                  "generator": false,
                                  "async": false,
                                  "declare": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 257,
                                    "end": 300,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 271,
                                        "end": 290,
                                        "argument": {
                                          "type": "Literal",
                                          "start": 278,
                                          "end": 289,
                                          "value": "something",
                                          "raw": "\"something\""
                                        }
                                      }
                                    ]
                                  },
                                  "expression": false
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 377,
                  "end": 395,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 383,
                      "end": 394,
                      "id": {
                        "type": "Identifier",
                        "start": 383,
                        "end": 389,
                        "decorators": [],
                        "name": "module",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "start": 392,
                        "end": 394,
                        "properties": []
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 400,
                  "end": 430,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 400,
                    "end": 430,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 400,
                      "end": 414,
                      "object": {
                        "type": "Identifier",
                        "start": 400,
                        "end": 406,
                        "decorators": [],
                        "name": "module",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 407,
                        "end": 414,
                        "decorators": [],
                        "name": "exports",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 430,
                      "decorators": [],
                      "name": "ExtendedClass",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 435,
                  "end": 457,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 442,
                    "end": 456,
                    "object": {
                      "type": "Identifier",
                      "start": 442,
                      "end": 448,
                      "decorators": [],
                      "name": "module",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 456,
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
