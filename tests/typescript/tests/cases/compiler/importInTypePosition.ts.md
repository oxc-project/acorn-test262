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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 36
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
                      "start": 47,
                      "end": 58
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 69,
                                "end": 75
                              },
                              "start": 67,
                              "end": 75
                            },
                            "start": 66,
                            "end": 75
                          },
                          "readonly": false,
                          "static": false,
                          "start": 59,
                          "end": 75
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 87,
                                "end": 93
                              },
                              "start": 85,
                              "end": 93
                            },
                            "start": 84,
                            "end": 93
                          },
                          "readonly": false,
                          "static": false,
                          "start": 77,
                          "end": 93
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 95,
                        "end": 98
                      },
                      "expression": false,
                      "start": 58,
                      "end": 98
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 47,
                    "end": 98
                  }
                ],
                "start": 37,
                "end": 104
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 104
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 104
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
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 126
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 138
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 139,
                        "end": 140
                      },
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 142,
                        "end": 143
                      }
                    ],
                    "start": 129,
                    "end": 144
                  },
                  "definite": false,
                  "start": 120,
                  "end": 144
                }
              ],
              "declare": false,
              "start": 116,
              "end": 145
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 109,
            "end": 145
          }
        ],
        "start": 12,
        "end": 147
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 147
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 184
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 204
            },
            "importKind": "value",
            "start": 192,
            "end": 205
          }
        ],
        "start": 185,
        "end": 255
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 173,
      "end": 255
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 291
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "importKind": "value",
            "start": 299,
            "end": 312
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 380
                      },
                      "typeArguments": null,
                      "start": 372,
                      "end": 380
                    },
                    "start": 370,
                    "end": 380
                  },
                  "start": 369,
                  "end": 380
                },
                "init": null,
                "definite": false,
                "start": 369,
                "end": 380
              }
            ],
            "declare": false,
            "start": 365,
            "end": 381
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 394
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 400
                        },
                        "start": 393,
                        "end": 400
                      },
                      "typeArguments": null,
                      "start": 393,
                      "end": 400
                    },
                    "start": 391,
                    "end": 400
                  },
                  "start": 390,
                  "end": 400
                },
                "init": null,
                "definite": false,
                "start": 390,
                "end": 400
              }
            ],
            "declare": false,
            "start": 386,
            "end": 401
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 411
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 416,
                        "end": 417
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 419,
                        "end": 420
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 416,
                      "end": 420
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 422,
                        "end": 423
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 425,
                        "end": 426
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 422,
                      "end": 426
                    }
                  ],
                  "start": 414,
                  "end": 428
                },
                "definite": false,
                "start": 410,
                "end": 428
              }
            ],
            "declare": false,
            "start": 406,
            "end": 429
          }
        ],
        "start": 292,
        "end": 431
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 280,
      "end": 431
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 431
}
```
