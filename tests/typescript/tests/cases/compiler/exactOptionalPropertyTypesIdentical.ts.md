__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
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
                          "start": 15,
                          "end": 16
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 15,
                        "end": 16
                      }
                    ],
                    "start": 14,
                    "end": 17
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 23,
                          "end": 24
                        },
                        "typeArguments": null,
                        "start": 23,
                        "end": 24
                      },
                      "extendsType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 34,
                              "end": 35
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 38,
                                "end": 44
                              },
                              "start": 36,
                              "end": 44
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 34,
                            "end": 44
                          }
                        ],
                        "start": 33,
                        "end": 45
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 48,
                          "end": 49
                        },
                        "start": 48,
                        "end": 49
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 52,
                          "end": 53
                        },
                        "start": 52,
                        "end": 53
                      },
                      "start": 23,
                      "end": 53
                    },
                    "start": 20,
                    "end": 53
                  },
                  "start": 14,
                  "end": 53
                },
                "start": 12,
                "end": 53
              },
              "start": 11,
              "end": 53
            },
            "init": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 56,
                "end": 60
              },
              "start": 56,
              "end": 61
            },
            "definite": false,
            "start": 11,
            "end": 61
          }
        ],
        "declare": false,
        "start": 7,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 62
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
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
                          "start": 78,
                          "end": 79
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 78,
                        "end": 79
                      }
                    ],
                    "start": 77,
                    "end": 80
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 87
                        },
                        "typeArguments": null,
                        "start": 86,
                        "end": 87
                      },
                      "extendsType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 97,
                              "end": 98
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 101,
                                    "end": 107
                                  },
                                  {
                                    "type": "TSUndefinedKeyword",
                                    "start": 110,
                                    "end": 119
                                  }
                                ],
                                "start": 101,
                                "end": 119
                              },
                              "start": 99,
                              "end": 119
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 97,
                            "end": 119
                          }
                        ],
                        "start": 96,
                        "end": 120
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 123,
                          "end": 124
                        },
                        "start": 123,
                        "end": 124
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 127,
                          "end": 128
                        },
                        "start": 127,
                        "end": 128
                      },
                      "start": 86,
                      "end": 128
                    },
                    "start": 83,
                    "end": 128
                  },
                  "start": 77,
                  "end": 128
                },
                "start": 75,
                "end": 128
              },
              "start": 74,
              "end": 128
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "definite": false,
            "start": 74,
            "end": 132
          }
        ],
        "declare": false,
        "start": 70,
        "end": 133
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 63,
      "end": 133
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 133
}
```
