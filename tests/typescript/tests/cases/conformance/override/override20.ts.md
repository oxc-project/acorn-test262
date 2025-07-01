__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11,
                      "end": 13
                    },
                    "typeArguments": null,
                    "start": 11,
                    "end": 13
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 16,
                      "end": 18
                    },
                    "typeArguments": null,
                    "start": 16,
                    "end": 18
                  }
                ],
                "start": 11,
                "end": 18
              },
              "start": 9,
              "end": 18
            },
            "start": 6,
            "end": 18
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 43
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
                      "body": [],
                      "start": 46,
                      "end": 49
                    },
                    "expression": false,
                    "start": 43,
                    "end": 49
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 41,
                  "end": 49
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 60
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
                      "body": [],
                      "start": 63,
                      "end": 66
                    },
                    "expression": false,
                    "start": 60,
                    "end": 66
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 58,
                  "end": 66
                }
              ],
              "start": 31,
              "end": 72
            },
            "abstract": false,
            "declare": false,
            "start": 25,
            "end": 72
          },
          "definite": false,
          "start": 6,
          "end": 72
        }
      ],
      "declare": false,
      "start": 0,
      "end": 72
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 86
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 95
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
                "start": 99,
                "end": 103
              },
              "start": 97,
              "end": 103
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 93,
            "end": 104
          }
        ],
        "start": 87,
        "end": 106
      },
      "declare": false,
      "start": 74,
      "end": 106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 120
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 129
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
                "start": 133,
                "end": 137
              },
              "start": 131,
              "end": 137
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 127,
            "end": 138
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 145
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
                "start": 149,
                "end": 153
              },
              "start": 147,
              "end": 153
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 143,
            "end": 154
          }
        ],
        "start": 121,
        "end": 156
      },
      "declare": false,
      "start": 108,
      "end": 156
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 170
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                  "start": 184,
                  "end": 188
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 190,
                      "end": 193
                    },
                    "start": 190,
                    "end": 195
                  },
                  "start": 188,
                  "end": 195
                },
                "value": null,
                "start": 181,
                "end": 195
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 200
                },
                "typeArguments": null,
                "start": 198,
                "end": 200
              },
              "start": 196,
              "end": 200
            },
            "start": 177,
            "end": 201
          }
        ],
        "start": 171,
        "end": 203
      },
      "declare": false,
      "start": 158,
      "end": 203
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 217
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                  "start": 231,
                  "end": 235
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 237,
                      "end": 240
                    },
                    "start": 237,
                    "end": 242
                  },
                  "start": 235,
                  "end": 242
                },
                "value": null,
                "start": 228,
                "end": 242
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 247
                },
                "typeArguments": null,
                "start": 245,
                "end": 247
              },
              "start": 243,
              "end": 247
            },
            "start": 224,
            "end": 248
          }
        ],
        "start": 218,
        "end": 250
      },
      "declare": false,
      "start": 205,
      "end": 250
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 265,
          "end": 268
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 280
        },
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
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 289
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
                            "type": "Super",
                            "start": 302,
                            "end": 307
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 308,
                            "end": 310
                          },
                          "optional": false,
                          "computed": false,
                          "start": 302,
                          "end": 310
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 302,
                        "end": 312
                      },
                      "directive": null,
                      "start": 302,
                      "end": 313
                    }
                  ],
                  "start": 292,
                  "end": 319
                },
                "expression": false,
                "start": 289,
                "end": 319
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 287,
              "end": 319
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 326
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
                            "type": "Super",
                            "start": 339,
                            "end": 344
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 345,
                            "end": 347
                          },
                          "optional": false,
                          "computed": false,
                          "start": 339,
                          "end": 347
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 339,
                        "end": 349
                      },
                      "directive": null,
                      "start": 339,
                      "end": 350
                    }
                  ],
                  "start": 329,
                  "end": 356
                },
                "expression": false,
                "start": 326,
                "end": 356
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 324,
              "end": 356
            }
          ],
          "start": 281,
          "end": 358
        },
        "abstract": false,
        "declare": false,
        "start": 259,
        "end": 358
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 252,
      "end": 358
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 358
}
```
