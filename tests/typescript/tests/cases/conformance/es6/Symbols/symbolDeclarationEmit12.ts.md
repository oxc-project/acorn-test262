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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 27,
              "end": 30
            },
            "declare": false,
            "start": 15,
            "end": 30
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 67
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iterator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 76
                      },
                      "optional": false,
                      "computed": false,
                      "start": 61,
                      "end": 76
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 79,
                          "end": 80
                        },
                        "typeArguments": null,
                        "start": 79,
                        "end": 80
                      },
                      "start": 77,
                      "end": 80
                    },
                    "value": null,
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 60,
                    "end": 81
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 97
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toPrimitive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 98,
                        "end": 109
                      },
                      "optional": false,
                      "computed": false,
                      "start": 91,
                      "end": 109
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 114,
                                "end": 115
                              },
                              "typeArguments": null,
                              "start": 114,
                              "end": 115
                            },
                            "start": 112,
                            "end": 115
                          },
                          "start": 111,
                          "end": 115
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 117,
                        "end": 120
                      },
                      "expression": false,
                      "start": 110,
                      "end": 120
                    },
                    "kind": "method",
                    "computed": true,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 90,
                    "end": 120
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 136
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isConcatSpreadable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 155
                      },
                      "optional": false,
                      "computed": false,
                      "start": 130,
                      "end": 155
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 160,
                            "end": 161
                          },
                          "typeArguments": null,
                          "start": 160,
                          "end": 161
                        },
                        "start": 158,
                        "end": 161
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 183,
                              "end": 192
                            },
                            "start": 176,
                            "end": 192
                          }
                        ],
                        "start": 162,
                        "end": 202
                      },
                      "expression": false,
                      "start": 156,
                      "end": 202
                    },
                    "kind": "method",
                    "computed": true,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 129,
                    "end": 202
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 216,
                        "end": 222
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toPrimitive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 223,
                        "end": 234
                      },
                      "optional": false,
                      "computed": false,
                      "start": 216,
                      "end": 234
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 247,
                              "end": 256
                            },
                            "start": 240,
                            "end": 257
                          }
                        ],
                        "start": 238,
                        "end": 259
                      },
                      "expression": false,
                      "start": 235,
                      "end": 259
                    },
                    "kind": "get",
                    "computed": true,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 211,
                    "end": 259
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 273,
                        "end": 279
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toPrimitive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 280,
                        "end": 291
                      },
                      "optional": false,
                      "computed": false,
                      "start": 273,
                      "end": 291
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 296,
                                "end": 297
                              },
                              "typeArguments": null,
                              "start": 296,
                              "end": 297
                            },
                            "start": 294,
                            "end": 297
                          },
                          "start": 293,
                          "end": 297
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 299,
                        "end": 302
                      },
                      "expression": false,
                      "start": 292,
                      "end": 302
                    },
                    "kind": "set",
                    "computed": true,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 268,
                    "end": 302
                  }
                ],
                "start": 50,
                "end": 308
              },
              "abstract": false,
              "declare": false,
              "start": 42,
              "end": 308
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 35,
            "end": 308
          }
        ],
        "start": 9,
        "end": 310
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 310
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 310
}
```
