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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 22,
        "name": "HowlErrorCallback",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "soundId",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 43,
            "end": 57,
            "name": "error",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 57,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 50,
                "end": 57
              }
            },
            "decorators": [],
            "optional": false
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
        "name": "HowlOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "onplayerror",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "HowlErrorCallback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 153,
        "name": "Howl",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 154,
        "end": 284,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 158,
            "end": 210,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 169,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 210,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "options",
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
                          "name": "HowlOptions",
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
                  "readonly": true,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 210,
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
          },
          {
            "type": "MethodDefinition",
            "start": 213,
            "end": 282,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 217,
              "name": "once",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 217,
              "end": 282,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 218,
                  "end": 232,
                  "name": "name",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 234,
                  "end": 248,
                  "name": "fn",
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 264,
                          "end": 267,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 268,
                          "end": 272,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 274,
                          "end": 276,
                          "name": "fn",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 286,
      "end": 378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 377,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 300,
            "name": "instance",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 303,
            "end": 377,
            "callee": {
              "type": "Identifier",
              "start": 307,
              "end": 311,
              "name": "Howl",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 327,
                      "name": "onplayerror",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 329,
                      "end": 373,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "UnaryExpression",
                        "start": 335,
                        "end": 373,
                        "operator": "void",
                        "prefix": true,
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
                              "name": "instance",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 349,
                              "end": 353,
                              "name": "once",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
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
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 370,
                                "end": 372,
                                "body": []
                              },
                              "typeParameters": null,
                              "returnType": null
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
