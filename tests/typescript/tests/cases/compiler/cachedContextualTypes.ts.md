__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 515,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 22,
      "end": 179,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 53,
        "decorators": [],
        "name": "createInstance",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 126,
          "end": 136,
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 136,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 136,
                "decorators": [],
                "name": "Ctor",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 138,
          "end": 174,
          "argument": {
            "type": "Identifier",
            "start": 141,
            "end": 145,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 145,
            "end": 174,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 147,
              "end": 174,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 168,
                "end": 174,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 169,
                    "end": 173,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 173,
                      "decorators": [],
                      "name": "Ctor",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 168,
                "decorators": [],
                "name": "ConstructorParameters",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 178,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 177,
          "end": 178,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 53,
        "end": 125,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 54,
            "end": 94,
            "const": false,
            "constraint": {
              "type": "TSConstructorType",
              "start": 67,
              "end": 94,
              "abstract": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 72,
                  "end": 86,
                  "argument": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 79,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 81,
                      "end": 86,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 81,
                        "end": 84
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 88,
                "end": 94,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 91,
                  "end": 94
                }
              },
              "typeParameters": null
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "decorators": [],
              "name": "Ctor",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 96,
            "end": 124,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 106,
              "end": 124,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 118,
                "end": 124,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 119,
                    "end": 123,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 123,
                      "decorators": [],
                      "name": "Ctor",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 106,
                "end": 118,
                "decorators": [],
                "name": "InstanceType",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 181,
      "end": 292,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 188,
        "end": 292,
        "body": {
          "type": "TSInterfaceBody",
          "start": 227,
          "end": 292,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 233,
              "end": 290,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 233,
                "end": 247,
                "decorators": [],
                "name": "toolbarOptions",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 247,
                "end": 289,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 249,
                  "end": 289,
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "start": 259,
                      "end": 283,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 259,
                        "end": 262,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 263,
                          "end": 274,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 266,
                            "end": 274,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 268,
                              "end": 274
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 275,
                        "end": 283,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 277,
                          "end": 283
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 198,
          "end": 226,
          "decorators": [],
          "name": "IMenuWorkbenchToolBarOptions",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 294,
      "end": 410,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 321,
        "end": 410,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 408,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 338,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 338,
              "end": 408,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 405,
                "end": 408,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 348,
                  "end": 397,
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 355,
                    "end": 397,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 357,
                      "end": 397,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 357,
                          "end": 385,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 357,
                            "end": 385,
                            "decorators": [],
                            "name": "IMenuWorkbenchToolBarOptions",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 388,
                          "end": 397
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 320,
        "decorators": [],
        "name": "MenuWorkbenchToolBar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 515,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 412,
        "end": 514,
        "arguments": [
          {
            "type": "Identifier",
            "start": 427,
            "end": 447,
            "decorators": [],
            "name": "MenuWorkbenchToolBar",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 449,
            "end": 513,
            "properties": [
              {
                "type": "Property",
                "start": 455,
                "end": 511,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 455,
                  "end": 469,
                  "decorators": [],
                  "name": "toolbarOptions",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 471,
                  "end": 511,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 481,
                      "end": 505,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 484,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 484,
                        "end": 505,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 490,
                          "end": 505,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 492,
                              "end": 503,
                              "argument": {
                                "type": "Identifier",
                                "start": 499,
                                "end": 502,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 485,
                            "end": 488,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 412,
          "end": 426,
          "decorators": [],
          "name": "createInstance",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
