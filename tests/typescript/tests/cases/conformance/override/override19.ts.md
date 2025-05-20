__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 427,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 45,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 11,
        "end": 44,
        "abstract": true,
        "params": [
          {
            "type": "RestElement",
            "start": 24,
            "end": 36,
            "argument": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 36,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 33,
                "end": 36
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 38,
          "end": 44,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 41,
            "end": 44
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 46,
      "end": 188,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 74,
        "decorators": [],
        "name": "CreateMixin",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 105,
          "end": 115,
          "decorators": [],
          "name": "Context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 112,
            "end": 115,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 114,
              "end": 115,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 117,
          "end": 124,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 121,
            "end": 124,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 123,
              "end": 124,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 125,
        "end": 188,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 127,
          "end": 188,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 127,
              "end": 128,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 131,
              "end": 188,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 136,
                  "end": 186,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 141,
                      "end": 155,
                      "argument": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 148,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 148,
                        "end": 155,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 150,
                          "end": 155,
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 150,
                            "end": 153
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 158,
                      "end": 186,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 160,
                          "end": 184,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 167,
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 167,
                            "end": 184,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 169,
                              "end": 184,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 181,
                                "end": 184,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 182,
                                    "end": 183,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 182,
                                      "end": 183,
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 169,
                                "end": 181,
                                "decorators": [],
                                "name": "InstanceType",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  "typeParameters": null
                }
              ]
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 74,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 88,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 88,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 88,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 103,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 100,
              "end": 103,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 189,
      "end": 205,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 205,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 202,
        "decorators": [],
        "name": "Context",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 207,
      "end": 239,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 215,
        "end": 239,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 221,
            "end": 237,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 232,
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 232,
              "end": 237,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 235,
                "end": 237,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 213,
        "end": 214,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 241,
      "end": 324,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 281,
        "end": 324,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 286,
            "end": 303,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 298,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 298,
              "end": 303,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 301,
                "end": 303,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 247,
        "end": 248,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 257,
        "end": 280,
        "arguments": [
          {
            "type": "Identifier",
            "start": 269,
            "end": 276,
            "decorators": [],
            "name": "Context",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 257,
          "end": 268,
          "decorators": [],
          "name": "CreateMixin",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 326,
      "end": 427,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 366,
        "end": 427,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 372,
            "end": 397,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 381,
              "end": 392,
              "decorators": [],
              "name": "doSomethang",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 392,
              "end": 397,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 395,
                "end": 397,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 332,
        "end": 333,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 342,
        "end": 365,
        "arguments": [
          {
            "type": "Identifier",
            "start": 354,
            "end": 361,
            "decorators": [],
            "name": "Context",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 363,
            "end": 364,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 342,
          "end": 353,
          "decorators": [],
          "name": "CreateMixin",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
