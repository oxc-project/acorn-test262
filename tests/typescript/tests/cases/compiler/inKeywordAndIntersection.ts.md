__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 14,
              "end": 15
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 10,
            "end": 15
          }
        ],
        "start": 8,
        "end": 17
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 25
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 32,
              "end": 33
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 28,
            "end": 33
          }
        ],
        "start": 26,
        "end": 35
      },
      "abstract": false,
      "declare": false,
      "start": 18,
      "end": 35
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 49
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
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
                        "start": 55,
                        "end": 56
                      },
                      "typeArguments": null,
                      "start": 55,
                      "end": 56
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 61,
                            "end": 62
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 64,
                              "end": 70
                            },
                            "start": 62,
                            "end": 70
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 61,
                          "end": 70
                        }
                      ],
                      "start": 59,
                      "end": 72
                    }
                  ],
                  "start": 55,
                  "end": 72
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 76
                  },
                  "typeArguments": null,
                  "start": 75,
                  "end": 76
                }
              ],
              "start": 55,
              "end": 76
            },
            "start": 53,
            "end": 76
          },
          "start": 50,
          "end": 76
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 91
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 109
              },
              "start": 88,
              "end": 109
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 124
                  },
                  "directive": null,
                  "start": 121,
                  "end": 125
                }
              ],
              "start": 111,
              "end": 157
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 180
                  },
                  "directive": null,
                  "start": 177,
                  "end": 181
                }
              ],
              "start": 167,
              "end": 197
            },
            "start": 84,
            "end": 197
          }
        ],
        "start": 78,
        "end": 199
      },
      "expression": false,
      "start": 37,
      "end": 199
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InstanceOne",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 244
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 254
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 258,
                "end": 262
              },
              "start": 256,
              "end": 262
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 251,
            "end": 262
          }
        ],
        "start": 245,
        "end": 264
      },
      "declare": false,
      "start": 223,
      "end": 264
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InstanceTwo",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 287
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "two",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 297
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 301,
                "end": 305
              },
              "start": 299,
              "end": 305
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 294,
            "end": 305
          }
        ],
        "start": 288,
        "end": 307
      },
      "declare": false,
      "start": 266,
      "end": 307
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
            "start": 315,
            "end": 323
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 326,
              "end": 328
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InstanceOne",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 343
                  },
                  "typeArguments": null,
                  "start": 332,
                  "end": 343
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InstanceTwo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 346,
                    "end": 357
                  },
                  "typeArguments": null,
                  "start": 346,
                  "end": 357
                }
              ],
              "start": 332,
              "end": 357
            },
            "start": 326,
            "end": 357
          },
          "definite": false,
          "start": 315,
          "end": 357
        }
      ],
      "declare": false,
      "start": 309,
      "end": 357
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
            "name": "ClassOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 373
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 376,
              "end": 378
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "InstanceOne",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 391,
                            "end": 402
                          },
                          "typeArguments": null,
                          "start": 391,
                          "end": 402
                        },
                        "start": 389,
                        "end": 402
                      },
                      "start": 384,
                      "end": 402
                    }
                  ],
                  "start": 382,
                  "end": 404
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 412
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 414,
                            "end": 418
                          },
                          "start": 414,
                          "end": 418
                        },
                        "start": 412,
                        "end": 418
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 409,
                      "end": 418
                    }
                  ],
                  "start": 407,
                  "end": 420
                }
              ],
              "start": 382,
              "end": 420
            },
            "start": 376,
            "end": 420
          },
          "definite": false,
          "start": 365,
          "end": 420
        }
      ],
      "declare": false,
      "start": 359,
      "end": 421
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "instance",
          "optional": false,
          "typeAnnotation": null,
          "start": 427,
          "end": 435
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClassOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 447,
          "end": 455
        },
        "start": 427,
        "end": 455
      },
      "consequent": {
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
                  "name": "instance",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 463,
                  "end": 471
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 475
                },
                "optional": false,
                "computed": false,
                "start": 463,
                "end": 475
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 463,
              "end": 477
            },
            "directive": null,
            "start": 463,
            "end": 478
          }
        ],
        "start": 457,
        "end": 480
      },
      "alternate": null,
      "start": 423,
      "end": 480
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 480
}
```
