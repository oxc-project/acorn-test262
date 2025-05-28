__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 378,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 22,
        "decorators": [],
        "name": "HowlErrorCallback",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 25,
        "end": 66,
        "typeParameters": null,
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
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 69,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 90,
        "decorators": [],
        "name": "HowlOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 141,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 95,
            "end": 139,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 106,
              "decorators": [],
              "name": "onplayerror",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 126,
                      "decorators": [],
                      "name": "HowlErrorCallback",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 129,
                    "end": 138
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
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 284,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 154,
        "end": 284,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 158,
            "end": 210,
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
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 210,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 206,
                          "decorators": [],
                          "name": "HowlOptions",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 210,
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
            "start": 213,
            "end": 282,
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
            "value": {
              "type": "FunctionExpression",
              "start": 217,
              "end": 282,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                        "value": "unlock",
                        "raw": "\"unlock\""
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
                      "typeParameters": null,
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
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 250,
                "end": 282,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 256,
                    "end": 278,
                    "expression": {
                      "type": "CallExpression",
                      "start": 256,
                      "end": 277,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 256,
                        "end": 267,
                        "object": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 263,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 264,
                          "end": 267,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                      "optional": false
                    },
                    "directive": null
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
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 378,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 377,
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
            "callee": {
              "type": "Identifier",
              "start": 307,
              "end": 311,
              "decorators": [],
              "name": "Howl",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 327,
                      "decorators": [],
                      "name": "onplayerror",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 329,
                      "end": 373,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "UnaryExpression",
                        "start": 335,
                        "end": 373,
                        "operator": "void",
                        "argument": {
                          "type": "CallExpression",
                          "start": 340,
                          "end": 373,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 340,
                            "end": 353,
                            "object": {
                              "type": "Identifier",
                              "start": 340,
                              "end": 348,
                              "decorators": [],
                              "name": "instance",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 349,
                              "end": 353,
                              "decorators": [],
                              "name": "once",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 354,
                              "end": 362,
                              "value": "unlock",
                              "raw": "\"unlock\""
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 364,
                              "end": 372,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 370,
                                "end": 372,
                                "body": []
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        },
                        "prefix": true
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
