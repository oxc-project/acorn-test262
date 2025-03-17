__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 428,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 11,
        "end": 44,
        "abstract": true,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 24,
            "end": 36,
            "argument": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 46,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 74,
        "name": "CreateMixin",
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
          "start": 105,
          "end": 115,
          "name": "Context",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 112,
            "end": 115,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 114,
              "end": 115,
              "typeName": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "name": "C",
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
          "type": "Identifier",
          "start": 117,
          "end": 124,
          "name": "Base",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 121,
            "end": 124,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 123,
              "end": 124,
              "typeName": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 74,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 88,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 88,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 88,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 103,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 100,
              "end": 103,
              "typeName": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 141,
                      "end": 155,
                      "argument": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 148,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 167,
                            "name": "context",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 167,
                            "end": 184,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 169,
                              "end": 184,
                              "typeName": {
                                "type": "Identifier",
                                "start": 169,
                                "end": 181,
                                "name": "InstanceType",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 181,
                                "end": 184,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 182,
                                    "end": 183,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 182,
                                      "end": 183,
                                      "name": "C",
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
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 189,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 202,
        "name": "Context",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 205,
        "body": []
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
      "start": 207,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 214,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 215,
        "end": 239,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 221,
            "end": 237,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 232,
              "name": "doSomething",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 232,
              "end": 237,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 235,
                "end": 237,
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
      "type": "ClassDeclaration",
      "start": 241,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 248,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 257,
        "end": 280,
        "callee": {
          "type": "Identifier",
          "start": 257,
          "end": 268,
          "name": "CreateMixin",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 269,
            "end": 276,
            "name": "Context",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 281,
        "end": 324,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 286,
            "end": 303,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 298,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 298,
              "end": 303,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 301,
                "end": 303,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": true,
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
      "type": "ClassDeclaration",
      "start": 326,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 332,
        "end": 333,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 342,
        "end": 365,
        "callee": {
          "type": "Identifier",
          "start": 342,
          "end": 353,
          "name": "CreateMixin",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 354,
            "end": 361,
            "name": "Context",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 363,
            "end": 364,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 366,
        "end": 427,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 372,
            "end": 397,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 381,
              "end": 392,
              "name": "doSomethang",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 392,
              "end": 397,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 395,
                "end": 397,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": true,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
