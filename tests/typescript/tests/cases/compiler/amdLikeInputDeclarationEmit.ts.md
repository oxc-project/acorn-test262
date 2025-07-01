__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "define",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 26,
              "end": 33
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 33
          }
        ],
        "start": 23,
        "end": 34
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 41,
              "end": 47
            },
            "start": 39,
            "end": 47
          },
          "start": 35,
          "end": 47
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "modules",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              },
              "start": 58,
              "end": 66
            },
            "start": 56,
            "end": 66
          },
          "start": 49,
          "end": 66
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ready",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "modules",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 86
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 88,
                        "end": 95
                      },
                      "start": 88,
                      "end": 97
                    },
                    "start": 86,
                    "end": 97
                  },
                  "value": null,
                  "start": 76,
                  "end": 97
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 102,
                    "end": 103
                  },
                  "typeArguments": null,
                  "start": 102,
                  "end": 103
                },
                "start": 99,
                "end": 103
              },
              "start": 75,
              "end": 103
            },
            "start": 73,
            "end": 103
          },
          "start": 68,
          "end": 103
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 0,
      "end": 105
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 105
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "deps/BaseClass",
        "raw": "\"deps/BaseClass\"",
        "start": 15,
        "end": 31
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 53
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
                    "name": "extends",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 78
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 79,
                            "end": 80
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 79,
                          "end": 80
                        }
                      ],
                      "start": 78,
                      "end": 81
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 85,
                              "end": 86
                            },
                            "typeArguments": null,
                            "start": 85,
                            "end": 86
                          },
                          "start": 83,
                          "end": 86
                        },
                        "start": 82,
                        "end": 86
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 99,
                                  "end": 100
                                },
                                "typeArguments": null,
                                "start": 99,
                                "end": 100
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "BaseClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 103,
                                  "end": 112
                                },
                                "typeArguments": null,
                                "start": 103,
                                "end": 112
                              }
                            ],
                            "start": 99,
                            "end": 112
                          },
                          "start": 96,
                          "end": 112
                        },
                        "start": 89,
                        "end": 112
                      },
                      "start": 87,
                      "end": 112
                    },
                    "body": null,
                    "expression": false,
                    "start": 78,
                    "end": 113
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 64,
                  "end": 113
                }
              ],
              "start": 54,
              "end": 119
            },
            "abstract": false,
            "declare": false,
            "start": 38,
            "end": 119
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 142
            },
            "start": 124,
            "end": 143
          }
        ],
        "start": 32,
        "end": 145
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 145
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 145
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "define",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 6
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "lib/ExtendedClass",
            "raw": "\"lib/ExtendedClass\"",
            "start": 7,
            "end": 26
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "deps/BaseClass",
                "raw": "\"deps/BaseClass\"",
                "start": 29,
                "end": 45
              }
            ],
            "start": 28,
            "end": 46
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 173
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExtendedClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 199,
                        "end": 212
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BaseClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 215,
                            "end": 224
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "extends",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 225,
                            "end": 232
                          },
                          "optional": false,
                          "computed": false,
                          "start": 215,
                          "end": 232
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 243,
                                  "end": 244
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
                                          "value": "something",
                                          "raw": "\"something\"",
                                          "start": 278,
                                          "end": 289
                                        },
                                        "start": 271,
                                        "end": 290
                                      }
                                    ],
                                    "start": 257,
                                    "end": 300
                                  },
                                  "expression": false,
                                  "start": 246,
                                  "end": 300
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 243,
                                "end": 300
                              }
                            ],
                            "start": 233,
                            "end": 306
                          }
                        ],
                        "optional": false,
                        "start": 215,
                        "end": 307
                      },
                      "definite": false,
                      "start": 199,
                      "end": 307
                    }
                  ],
                  "declare": false,
                  "start": 193,
                  "end": 308
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "module",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 383,
                        "end": 389
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 392,
                        "end": 394
                      },
                      "definite": false,
                      "start": 383,
                      "end": 394
                    }
                  ],
                  "declare": false,
                  "start": 377,
                  "end": 395
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "module",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 406
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "exports",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 407,
                        "end": 414
                      },
                      "optional": false,
                      "computed": false,
                      "start": 400,
                      "end": 414
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExtendedClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 430
                    },
                    "start": 400,
                    "end": 430
                  },
                  "directive": null,
                  "start": 400,
                  "end": 430
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "module",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 442,
                      "end": 448
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 456
                    },
                    "optional": false,
                    "computed": false,
                    "start": 442,
                    "end": 456
                  },
                  "start": 435,
                  "end": 457
                }
              ],
              "start": 178,
              "end": 459
            },
            "id": null,
            "generator": false,
            "start": 163,
            "end": 459
          }
        ],
        "optional": false,
        "start": 0,
        "end": 460
      },
      "directive": null,
      "start": 0,
      "end": 461
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 461
}
```
