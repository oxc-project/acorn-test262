__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HowlErrorCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 22
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "soundId",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              },
              "start": 33,
              "end": 41
            },
            "start": 26,
            "end": 41
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 50,
                "end": 57
              },
              "start": 48,
              "end": 57
            },
            "start": 43,
            "end": 57
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 62,
            "end": 66
          },
          "start": 59,
          "end": 66
        },
        "start": 25,
        "end": 66
      },
      "declare": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HowlOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 90
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onplayerror",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 106
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HowlErrorCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 126
                    },
                    "typeArguments": null,
                    "start": 109,
                    "end": 126
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 129,
                    "end": 138
                  }
                ],
                "start": 109,
                "end": 138
              },
              "start": 107,
              "end": 138
            },
            "accessibility": null,
            "static": false,
            "start": 95,
            "end": 139
          }
        ],
        "start": 91,
        "end": 141
      },
      "declare": false,
      "start": 69,
      "end": 141
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Howl",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 153
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 169
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "HowlOptions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 195,
                          "end": 206
                        },
                        "typeArguments": null,
                        "start": 195,
                        "end": 206
                      },
                      "start": 193,
                      "end": 206
                    },
                    "start": 186,
                    "end": 206
                  },
                  "readonly": true,
                  "static": false,
                  "start": 170,
                  "end": 206
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 208,
                "end": 210
              },
              "expression": false,
              "start": 169,
              "end": 210
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 158,
            "end": 210
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "once",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 217
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "unlock",
                        "raw": "\"unlock\"",
                        "start": 224,
                        "end": 232
                      },
                      "start": 224,
                      "end": 232
                    },
                    "start": 222,
                    "end": 232
                  },
                  "start": 218,
                  "end": 232
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 244,
                          "end": 248
                        },
                        "start": 241,
                        "end": 248
                      },
                      "start": 238,
                      "end": 248
                    },
                    "start": 236,
                    "end": 248
                  },
                  "start": 234,
                  "end": 248
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 256,
                          "end": 263
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 264,
                          "end": 267
                        },
                        "optional": false,
                        "computed": false,
                        "start": 256,
                        "end": 267
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 268,
                          "end": 272
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 276
                        }
                      ],
                      "optional": false,
                      "start": 256,
                      "end": 277
                    },
                    "directive": null,
                    "start": 256,
                    "end": 278
                  }
                ],
                "start": 250,
                "end": 282
              },
              "expression": false,
              "start": 217,
              "end": 282
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 213,
            "end": 282
          }
        ],
        "start": 154,
        "end": 284
      },
      "abstract": false,
      "declare": false,
      "start": 143,
      "end": 284
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
            "name": "instance",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 300
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Howl",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 311
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
                      "name": "onplayerror",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 327
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "UnaryExpression",
                        "operator": "void",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "instance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 340,
                              "end": 348
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "once",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 349,
                              "end": 353
                            },
                            "optional": false,
                            "computed": false,
                            "start": 340,
                            "end": 353
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "unlock",
                              "raw": "\"unlock\"",
                              "start": 354,
                              "end": 362
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 370,
                                "end": 372
                              },
                              "id": null,
                              "generator": false,
                              "start": 364,
                              "end": 372
                            }
                          ],
                          "optional": false,
                          "start": 340,
                          "end": 373
                        },
                        "prefix": true,
                        "start": 335,
                        "end": 373
                      },
                      "id": null,
                      "generator": false,
                      "start": 329,
                      "end": 373
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 316,
                    "end": 373
                  }
                ],
                "start": 312,
                "end": 376
              }
            ],
            "start": 303,
            "end": 377
          },
          "definite": false,
          "start": 292,
          "end": 377
        }
      ],
      "declare": false,
      "start": 286,
      "end": 378
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 378
}
```
