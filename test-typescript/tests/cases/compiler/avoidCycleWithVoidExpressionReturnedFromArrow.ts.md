__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 379,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 67,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 22,
        "decorators": [],
        "name": "HowlErrorCallback",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 25,
        "end": 66,
        "params": [
          {
            "type": "Identifier",
            "start": 26,
            "end": 41,
            "decorators": [],
            "name": "soundId",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              }
            }
          },
          {
            "type": "Identifier",
            "start": 43,
            "end": 57,
            "decorators": [],
            "name": "error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 57,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 50,
                "end": 57
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 59,
          "end": 66,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 62,
            "end": 66
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 69,
      "end": 141,
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 141,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 95,
            "end": 139,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 106,
              "decorators": [],
              "name": "onplayerror",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 138,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 109,
                "end": 138,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 109,
                    "end": 126,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 126,
                      "decorators": [],
                      "name": "HowlErrorCallback",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 129,
                    "end": 138
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
        "start": 79,
        "end": 90,
        "decorators": [],
        "name": "HowlOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 284,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 154,
        "end": 284,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 158,
            "end": 210,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 169,
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
              "start": 169,
              "end": 210,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 210,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 170,
                  "end": 206,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 206,
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 193,
                      "end": 206,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 195,
                        "end": 206,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 206,
                          "decorators": [],
                          "name": "HowlOptions",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 213,
            "end": 282,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 217,
              "decorators": [],
              "name": "once",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 217,
              "end": 282,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 250,
                "end": 282,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 256,
                    "end": 278,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 256,
                      "end": 277,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 268,
                          "end": 272,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 274,
                          "end": 276,
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 256,
                        "end": 267,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 263,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 264,
                          "end": 267,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
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
                  "start": 218,
                  "end": 232,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 222,
                    "end": 232,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 224,
                      "end": 232,
                      "literal": {
                        "type": "Literal",
                        "start": 224,
                        "end": 232,
                        "raw": "\"unlock\"",
                        "value": "unlock"
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 234,
                  "end": 248,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 236,
                    "end": 248,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 238,
                      "end": 248,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 241,
                        "end": 248,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 244,
                          "end": 248
                        }
                      },
                      "typeParameters": null
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
        "start": 149,
        "end": 153,
        "decorators": [],
        "name": "Howl",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 377,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 300,
            "decorators": [],
            "name": "instance",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 303,
            "end": 377,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 312,
                "end": 376,
                "properties": [
                  {
                    "type": "Property",
                    "start": 316,
                    "end": 373,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 327,
                      "decorators": [],
                      "name": "onplayerror",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 329,
                      "end": 373,
                      "async": false,
                      "body": {
                        "type": "UnaryExpression",
                        "start": 335,
                        "end": 373,
                        "argument": {
                          "type": "CallExpression",
                          "start": 340,
                          "end": 373,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 354,
                              "end": 362,
                              "raw": "\"unlock\"",
                              "value": "unlock"
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 364,
                              "end": 372,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 370,
                                "end": 372,
                                "body": []
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "returnType": null,
                              "typeParameters": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 340,
                            "end": 353,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 340,
                              "end": 348,
                              "decorators": [],
                              "name": "instance",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 349,
                              "end": 353,
                              "decorators": [],
                              "name": "once",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "operator": "void",
                        "prefix": true
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 307,
              "end": 311,
              "decorators": [],
              "name": "Howl",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
