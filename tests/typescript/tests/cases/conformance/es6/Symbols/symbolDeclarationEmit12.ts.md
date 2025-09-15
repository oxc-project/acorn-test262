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
        "start": 10,
        "end": 11
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
              "start": 28,
              "end": 29
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 30,
              "end": 33
            },
            "declare": false,
            "start": 18,
            "end": 33
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
                "start": 51,
                "end": 52
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
                        "start": 64,
                        "end": 70
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iterator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 79
                      },
                      "optional": false,
                      "computed": false,
                      "start": 64,
                      "end": 79
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
                          "start": 82,
                          "end": 83
                        },
                        "typeArguments": null,
                        "start": 82,
                        "end": 83
                      },
                      "start": 80,
                      "end": 83
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
                    "start": 63,
                    "end": 84
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
                        "start": 94,
                        "end": 100
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toPrimitive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 112
                      },
                      "optional": false,
                      "computed": false,
                      "start": 94,
                      "end": 112
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
                                "start": 117,
                                "end": 118
                              },
                              "typeArguments": null,
                              "start": 117,
                              "end": 118
                            },
                            "start": 115,
                            "end": 118
                          },
                          "start": 114,
                          "end": 118
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 120,
                        "end": 123
                      },
                      "expression": false,
                      "start": 113,
                      "end": 123
                    },
                    "kind": "method",
                    "computed": true,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 93,
                    "end": 123
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
                        "start": 133,
                        "end": 139
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isConcatSpreadable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 158
                      },
                      "optional": false,
                      "computed": false,
                      "start": 133,
                      "end": 158
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
                            "start": 163,
                            "end": 164
                          },
                          "typeArguments": null,
                          "start": 163,
                          "end": 164
                        },
                        "start": 161,
                        "end": 164
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
                              "start": 186,
                              "end": 195
                            },
                            "start": 179,
                            "end": 195
                          }
                        ],
                        "start": 165,
                        "end": 205
                      },
                      "expression": false,
                      "start": 159,
                      "end": 205
                    },
                    "kind": "method",
                    "computed": true,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 132,
                    "end": 205
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
                        "start": 219,
                        "end": 225
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toPrimitive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 226,
                        "end": 237
                      },
                      "optional": false,
                      "computed": false,
                      "start": 219,
                      "end": 237
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
                              "start": 250,
                              "end": 259
                            },
                            "start": 243,
                            "end": 260
                          }
                        ],
                        "start": 241,
                        "end": 262
                      },
                      "expression": false,
                      "start": 238,
                      "end": 262
                    },
                    "kind": "get",
                    "computed": true,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 214,
                    "end": 262
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
                        "start": 276,
                        "end": 282
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toPrimitive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 294
                      },
                      "optional": false,
                      "computed": false,
                      "start": 276,
                      "end": 294
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
                                "start": 299,
                                "end": 300
                              },
                              "typeArguments": null,
                              "start": 299,
                              "end": 300
                            },
                            "start": 297,
                            "end": 300
                          },
                          "start": 296,
                          "end": 300
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 302,
                        "end": 305
                      },
                      "expression": false,
                      "start": 295,
                      "end": 305
                    },
                    "kind": "set",
                    "computed": true,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 271,
                    "end": 305
                  }
                ],
                "start": 53,
                "end": 311
              },
              "abstract": false,
              "declare": false,
              "start": 45,
              "end": 311
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 38,
            "end": 311
          }
        ],
        "start": 12,
        "end": 313
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 313
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 313
}
```
