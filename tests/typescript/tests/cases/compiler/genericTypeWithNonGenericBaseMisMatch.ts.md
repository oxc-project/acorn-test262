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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 24,
                              "end": 25
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 27,
                                "end": 33
                              },
                              "start": 25,
                              "end": 33
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 24,
                            "end": 33
                          }
                        ],
                        "start": 22,
                        "end": 35
                      },
                      "start": 20,
                      "end": 35
                    },
                    "start": 19,
                    "end": 35
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 40,
                    "end": 44
                  },
                  "start": 37,
                  "end": 44
                },
                "start": 18,
                "end": 44
              },
              "start": 16,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 15,
            "end": 44
          }
        ],
        "start": 12,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
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
              "start": 55,
              "end": 56
            },
            "constraint": {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 68
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 70,
                      "end": 76
                    },
                    "start": 68,
                    "end": 76
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 67,
                  "end": 76
                }
              ],
              "start": 65,
              "end": 78
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 55,
            "end": 78
          }
        ],
        "start": 54,
        "end": 79
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 92
          },
          "typeArguments": null,
          "start": 91,
          "end": 92
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
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
                  "name": "a",
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
                        "start": 101,
                        "end": 102
                      },
                      "typeArguments": null,
                      "start": 101,
                      "end": 102
                    },
                    "start": 99,
                    "end": 102
                  },
                  "start": 98,
                  "end": 102
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 105,
                  "end": 109
                },
                "start": 103,
                "end": 109
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 110,
                "end": 113
              },
              "expression": false,
              "start": 97,
              "end": 113
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 96,
            "end": 113
          }
        ],
        "start": 93,
        "end": 115
      },
      "abstract": false,
      "declare": false,
      "start": 47,
      "end": 115
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 121
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 132,
                        "end": 133
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 135,
                          "end": 141
                        },
                        "start": 133,
                        "end": 141
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 132,
                      "end": 141
                    }
                  ],
                  "start": 130,
                  "end": 143
                }
              ],
              "start": 129,
              "end": 144
            },
            "arguments": [],
            "start": 124,
            "end": 146
          },
          "definite": false,
          "start": 120,
          "end": 146
        }
      ],
      "declare": false,
      "start": 116,
      "end": 147
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
            "name": "i",
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
                  "start": 155,
                  "end": 156
                },
                "typeArguments": null,
                "start": 155,
                "end": 156
              },
              "start": 153,
              "end": 156
            },
            "start": 152,
            "end": 156
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 160
          },
          "definite": false,
          "start": 152,
          "end": 160
        }
      ],
      "declare": false,
      "start": 148,
      "end": 161
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 226
}
```
