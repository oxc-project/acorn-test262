__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 46
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
                "start": 47,
                "end": 48
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 57,
                "end": 63
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 47,
              "end": 63
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 66
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 65,
              "end": 66
            }
          ],
          "start": 46,
          "end": 67
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "receiver",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 82
                },
                "typeArguments": null,
                "start": 81,
                "end": 82
              },
              "start": 79,
              "end": 82
            },
            "start": 71,
            "end": 82
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "has",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 98
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": {
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
                          "start": 100,
                          "end": 103
                        },
                        "start": 99,
                        "end": 103
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 106,
                        "end": 113
                      },
                      "start": 104,
                      "end": 113
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 95,
                    "end": 114
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 118
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 122,
                              "end": 123
                            },
                            "typeArguments": null,
                            "start": 122,
                            "end": 123
                          },
                          "start": 120,
                          "end": 123
                        },
                        "start": 119,
                        "end": 123
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 126,
                              "end": 127
                            },
                            "typeArguments": null,
                            "start": 126,
                            "end": 127
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 130,
                            "end": 139
                          }
                        ],
                        "start": 126,
                        "end": 139
                      },
                      "start": 124,
                      "end": 139
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 115,
                    "end": 139
                  }
                ],
                "start": 93,
                "end": 141
              },
              "start": 91,
              "end": 141
            },
            "start": 86,
            "end": 141
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "kind",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "f",
                  "raw": "\"f\"",
                  "start": 152,
                  "end": 155
                },
                "start": 152,
                "end": 155
              },
              "start": 150,
              "end": 155
            },
            "start": 145,
            "end": 155
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "typeArguments": null,
            "start": 159,
            "end": 160
          },
          "start": 157,
          "end": 160
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 161
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 161
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 208
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
                "start": 209,
                "end": 210
              },
              "constraint": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 227,
                      "end": 231
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 233,
                          "end": 236
                        },
                        "start": 233,
                        "end": 238
                      },
                      "start": 231,
                      "end": 238
                    },
                    "value": null,
                    "start": 224,
                    "end": 238
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 243,
                    "end": 250
                  },
                  "start": 240,
                  "end": 250
                },
                "start": 219,
                "end": 250
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 209,
              "end": 250
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 253
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 252,
              "end": 253
            }
          ],
          "start": 208,
          "end": 254
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "receiver",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 269
                },
                "typeArguments": null,
                "start": 268,
                "end": 269
              },
              "start": 266,
              "end": 269
            },
            "start": 258,
            "end": 269
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 281
                },
                "typeArguments": null,
                "start": 280,
                "end": 281
              },
              "start": 278,
              "end": 281
            },
            "start": 273,
            "end": 281
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "f",
                  "raw": "\"f\"",
                  "start": 291,
                  "end": 294
                },
                "start": 291,
                "end": 294
              },
              "start": 289,
              "end": 294
            },
            "start": 285,
            "end": 294
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 308
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 310,
                          "end": 311
                        },
                        "typeArguments": null,
                        "start": 310,
                        "end": 311
                      },
                      "start": 308,
                      "end": 311
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 303,
                    "end": 311
                  }
                ],
                "start": 301,
                "end": 313
              },
              "start": 299,
              "end": 313
            },
            "start": 298,
            "end": 313
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "typeArguments": null,
            "start": 317,
            "end": 318
          },
          "start": 315,
          "end": 318
        },
        "body": null,
        "expression": false,
        "start": 169,
        "end": 319
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 162,
      "end": 319
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 320
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "__classPrivateFieldGet",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 31
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "__classPrivateFieldGet",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 31
          },
          "exportKind": "value",
          "start": 9,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.js",
        "raw": "\"./index.js\"",
        "start": 39,
        "end": 51
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
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
                "start": 21,
                "end": 32
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
                            "start": 41,
                            "end": 48
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 49,
                            "end": 52
                          },
                          "optional": false,
                          "computed": false,
                          "start": 41,
                          "end": 52
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 53,
                                "end": 56
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "test",
                                "start": 57,
                                "end": 62
                              },
                              "optional": false,
                              "computed": false,
                              "start": 53,
                              "end": 62
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 53,
                            "end": 64
                          }
                        ],
                        "optional": false,
                        "start": 41,
                        "end": 65
                      },
                      "directive": null,
                      "start": 41,
                      "end": 66
                    }
                  ],
                  "start": 35,
                  "end": 70
                },
                "expression": false,
                "start": 32,
                "end": 70
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 21,
              "end": 70
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "test",
                "start": 81,
                "end": 86
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
                        "value": "success",
                        "raw": "'success'",
                        "start": 102,
                        "end": 111
                      },
                      "start": 95,
                      "end": 112
                    }
                  ],
                  "start": 89,
                  "end": 116
                },
                "expression": false,
                "start": 86,
                "end": 116
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 74,
              "end": 116
            }
          ],
          "start": 17,
          "end": 118
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 118
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 118
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 118
}
```
