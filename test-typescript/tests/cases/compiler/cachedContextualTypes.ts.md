__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 516,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 22,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 53,
        "name": "createInstance",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 126,
          "end": 136,
          "name": "ctor",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 136,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 136,
                "name": "Ctor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 138,
          "end": 174,
          "argument": {
            "type": "Identifier",
            "start": 141,
            "end": 145,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 168,
                "name": "ConstructorParameters",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 168,
                "end": 174,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 169,
                    "end": 173,
                    "typeName": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 173,
                      "name": "Ctor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 53,
        "end": 125,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 54,
            "end": 94,
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "name": "Ctor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSConstructorType",
              "start": 67,
              "end": 94,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 72,
                  "end": 86,
                  "argument": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 79,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 96,
            "end": 124,
            "name": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 106,
              "end": 124,
              "typeName": {
                "type": "Identifier",
                "start": 106,
                "end": 118,
                "name": "InstanceType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 118,
                "end": 124,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 119,
                    "end": 123,
                    "typeName": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 123,
                      "name": "Ctor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 178,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 177,
          "end": 178,
          "typeName": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "name": "R",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 181,
      "end": 292,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 188,
        "end": 292,
        "id": {
          "type": "Identifier",
          "start": 198,
          "end": 226,
          "name": "IMenuWorkbenchToolBarOptions",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 227,
          "end": 292,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 233,
              "end": 290,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 233,
                "end": 247,
                "name": "toolbarOptions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "key": {
                        "type": "Identifier",
                        "start": 259,
                        "end": 262,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 263,
                          "end": 274,
                          "name": "bar",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 266,
                            "end": 274,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 268,
                              "end": 274
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                      "accessibility": null,
                      "readonly": false,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ClassDeclaration",
      "start": 294,
      "end": 410,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 320,
        "name": "MenuWorkbenchToolBar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 321,
        "end": 410,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 408,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 338,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 338,
              "end": 408,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 348,
                  "end": 397,
                  "name": "options",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 357,
                            "end": 385,
                            "name": "IMenuWorkbenchToolBarOptions",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 388,
                          "end": 397
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 405,
                "end": 408,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
      "type": "ExpressionStatement",
      "start": 412,
      "end": 515,
      "expression": {
        "type": "CallExpression",
        "start": 412,
        "end": 514,
        "callee": {
          "type": "Identifier",
          "start": 412,
          "end": 426,
          "name": "createInstance",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 427,
            "end": 447,
            "name": "MenuWorkbenchToolBar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 455,
                  "end": 469,
                  "name": "toolbarOptions",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 471,
                  "end": 511,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 481,
                      "end": 505,
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 484,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 484,
                        "end": 505,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 485,
                            "end": 488,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
