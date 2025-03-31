__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 65,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 63,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 30,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 30,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 24,
                    "end": 30
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 32,
                "end": 61,
                "name": "callback",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 42,
                    "end": 61,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 43,
                        "end": 50,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 44,
                          "end": 50,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 46,
                            "end": 50,
                            "literal": {
                              "type": "Literal",
                              "start": 46,
                              "end": 50,
                              "value": "hi",
                              "raw": "'hi'"
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 94,
            "end": 155,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 96,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 96,
              "end": 155,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 97,
                  "end": 106,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 106,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 100,
                      "end": 106
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 108,
                  "end": 137,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 137,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 118,
                      "end": 137,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 119,
                          "end": 126,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 120,
                            "end": 126,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 122,
                              "end": 126,
                              "literal": {
                                "type": "Literal",
                                "start": 122,
                                "end": 126,
                                "value": "hi",
                                "raw": "'hi'"
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 128,
                        "end": 137,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 131,
                          "end": 137
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
                "start": 139,
                "end": 155,
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 86,
          "end": 87,
          "expression": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
