__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrivateInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
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
      "start": 0,
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
          "name": "ExportedClass1",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 59
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
                "start": 74,
                "end": 85
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
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PrivateInterface",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 92,
                          "end": 108
                        },
                        "typeArguments": null,
                        "start": 92,
                        "end": 108
                      },
                      "start": 90,
                      "end": 108
                    },
                    "start": 86,
                    "end": 108
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 110,
                  "end": 113
                },
                "expression": false,
                "start": 85,
                "end": 113
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 66,
              "end": 113
            }
          ],
          "start": 60,
          "end": 115
        },
        "abstract": false,
        "declare": false,
        "start": 39,
        "end": 115
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 115
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedClass2",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 144
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
                "start": 159,
                "end": 170
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
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PrivateInterface",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 185,
                            "end": 201
                          },
                          "typeArguments": null,
                          "start": 185,
                          "end": 201
                        },
                        "start": 183,
                        "end": 201
                      },
                      "start": 179,
                      "end": 201
                    },
                    "readonly": false,
                    "static": false,
                    "start": 171,
                    "end": 201
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 203,
                  "end": 206
                },
                "expression": false,
                "start": 170,
                "end": 206
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 151,
              "end": 206
            }
          ],
          "start": 145,
          "end": 208
        },
        "abstract": false,
        "declare": false,
        "start": 124,
        "end": 208
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 117,
      "end": 208
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedClass3",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 237
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
                "start": 252,
                "end": 263
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
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PrivateInterface",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 294
                          },
                          "typeArguments": null,
                          "start": 278,
                          "end": 294
                        },
                        "start": 276,
                        "end": 294
                      },
                      "start": 272,
                      "end": 294
                    },
                    "readonly": false,
                    "static": false,
                    "start": 264,
                    "end": 294
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 307,
                          "end": 313
                        },
                        "start": 305,
                        "end": 313
                      },
                      "start": 304,
                      "end": 313
                    },
                    "readonly": false,
                    "static": false,
                    "start": 296,
                    "end": 313
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 315,
                  "end": 318
                },
                "expression": false,
                "start": 263,
                "end": 318
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 244,
              "end": 318
            }
          ],
          "start": 238,
          "end": 320
        },
        "abstract": false,
        "declare": false,
        "start": 217,
        "end": 320
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 210,
      "end": 320
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedClass4",
          "optional": false,
          "typeAnnotation": null,
          "start": 335,
          "end": 349
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
                "start": 364,
                "end": 375
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
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PrivateInterface",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 390,
                            "end": 406
                          },
                          "typeArguments": null,
                          "start": 390,
                          "end": 406
                        },
                        "start": 388,
                        "end": 406
                      },
                      "start": 384,
                      "end": 406
                    },
                    "readonly": false,
                    "static": false,
                    "start": 376,
                    "end": 406
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 417,
                          "end": 423
                        },
                        "start": 416,
                        "end": 423
                      },
                      "start": 415,
                      "end": 423
                    },
                    "readonly": false,
                    "static": false,
                    "start": 408,
                    "end": 423
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 425,
                  "end": 428
                },
                "expression": false,
                "start": 375,
                "end": 428
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 356,
              "end": 428
            }
          ],
          "start": 350,
          "end": 430
        },
        "abstract": false,
        "declare": false,
        "start": 329,
        "end": 430
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 322,
      "end": 430
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 430
}
```
