__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__test1__",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 16
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "interfaceWithPublicAndOptional",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 70
              },
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
                      "start": 71,
                      "end": 72
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 71,
                    "end": 72
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 74
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 73,
                    "end": 74
                  }
                ],
                "start": 70,
                "end": 75
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 78,
                      "end": 81
                    },
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
                          "start": 83,
                          "end": 84
                        },
                        "typeArguments": null,
                        "start": 83,
                        "end": 84
                      },
                      "start": 81,
                      "end": 84
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 78,
                    "end": 85
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 86,
                      "end": 89
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 92,
                          "end": 93
                        },
                        "typeArguments": null,
                        "start": 92,
                        "end": 93
                      },
                      "start": 90,
                      "end": 93
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 86,
                    "end": 94
                  }
                ],
                "start": 76,
                "end": 96
              },
              "declare": false,
              "start": 30,
              "end": 96
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 23,
            "end": 96
          },
          {
            "type": "EmptyStatement",
            "start": 96,
            "end": 97
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "interfaceWithPublicAndOptional",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 139
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 140,
                            "end": 146
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 147,
                            "end": 153
                          }
                        ],
                        "start": 139,
                        "end": 154
                      },
                      "start": 109,
                      "end": 154
                    },
                    "start": 107,
                    "end": 154
                  },
                  "start": 103,
                  "end": 154
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "one",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 162
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 164,
                        "end": 165
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 159,
                      "end": 165
                    }
                  ],
                  "start": 157,
                  "end": 167
                },
                "definite": false,
                "start": 103,
                "end": 167
              }
            ],
            "declare": false,
            "start": 99,
            "end": 168
          },
          {
            "type": "EmptyStatement",
            "start": 168,
            "end": 169
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__val__obj4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 196
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 203
                  },
                  "definite": false,
                  "start": 185,
                  "end": 203
                }
              ],
              "declare": false,
              "start": 181,
              "end": 204
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 174,
            "end": 204
          }
        ],
        "start": 17,
        "end": 206
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 206
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__test2__",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 223
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "classWithOptional",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 269
              },
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
                      "start": 270,
                      "end": 271
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 270,
                    "end": 271
                  }
                ],
                "start": 269,
                "end": 272
              },
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
                      "start": 275,
                      "end": 286
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
                            "name": "one",
                            "optional": true,
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
                                  "start": 300,
                                  "end": 301
                                },
                                "typeArguments": null,
                                "start": 300,
                                "end": 301
                              },
                              "start": 298,
                              "end": 301
                            },
                            "start": 294,
                            "end": 301
                          },
                          "readonly": false,
                          "static": false,
                          "start": 287,
                          "end": 301
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 303,
                        "end": 305
                      },
                      "expression": false,
                      "start": 286,
                      "end": 305
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 275,
                    "end": 305
                  }
                ],
                "start": 273,
                "end": 307
              },
              "abstract": false,
              "declare": false,
              "start": 246,
              "end": 307
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 230,
            "end": 307
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 336
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "classWithOptional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 343,
                    "end": 360
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 361,
                        "end": 367
                      }
                    ],
                    "start": 360,
                    "end": 368
                  },
                  "arguments": [],
                  "start": 339,
                  "end": 370
                },
                "definite": false,
                "start": 334,
                "end": 370
              }
            ],
            "declare": false,
            "start": 330,
            "end": 371
          },
          {
            "type": "EmptyStatement",
            "start": 371,
            "end": 372
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__val__x3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 388,
                    "end": 397
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 402
                  },
                  "definite": false,
                  "start": 388,
                  "end": 402
                }
              ],
              "declare": false,
              "start": 384,
              "end": 403
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 377,
            "end": 403
          }
        ],
        "start": 224,
        "end": 405
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 207,
      "end": 405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "__test2__",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 415
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 425
          },
          "optional": false,
          "computed": false,
          "start": 406,
          "end": 425
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "__test1__",
            "optional": false,
            "typeAnnotation": null,
            "start": 428,
            "end": 437
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__obj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 449
          },
          "optional": false,
          "computed": false,
          "start": 428,
          "end": 449
        },
        "start": 406,
        "end": 449
      },
      "directive": null,
      "start": 406,
      "end": 449
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 449
}
```
