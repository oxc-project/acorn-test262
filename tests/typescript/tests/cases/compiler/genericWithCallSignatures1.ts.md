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
        "name": "Callable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
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
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 33
                },
                "typeArguments": null,
                "start": 32,
                "end": 33
              },
              "start": 30,
              "end": 33
            },
            "start": 28,
            "end": 34
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 47,
                      "end": 48
                    },
                    "typeArguments": null,
                    "start": 47,
                    "end": 48
                  },
                  "start": 45,
                  "end": 48
                },
                "start": 40,
                "end": 48
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 51,
                "end": 55
              },
              "start": 49,
              "end": 55
            },
            "start": 39,
            "end": 56
          }
        ],
        "start": 22,
        "end": 58
      },
      "declare": false,
      "start": 0,
      "end": 58
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CallableExtention",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 87
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
              "start": 88,
              "end": 89
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 88,
            "end": 89
          }
        ],
        "start": 87,
        "end": 90
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Callable",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 107
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 109
                },
                "typeArguments": null,
                "start": 108,
                "end": 109
              }
            ],
            "start": 107,
            "end": 110
          },
          "start": 99,
          "end": 110
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 111,
        "end": 114
      },
      "declare": false,
      "start": 60,
      "end": 114
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 115
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 67
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
              "type": "Identifier",
              "decorators": [],
              "name": "callableThing",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CallableExtention",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 113
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 114,
                      "end": 120
                    }
                  ],
                  "start": 113,
                  "end": 121
                },
                "start": 96,
                "end": 121
              },
              "start": 94,
              "end": 121
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 74,
            "end": 122
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 143
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
                          "start": 160,
                          "end": 161
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 165,
                            "end": 171
                          },
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 173,
                                "end": 177
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "callableThing",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 178,
                                "end": 191
                              },
                              "optional": false,
                              "computed": false,
                              "start": 173,
                              "end": 191
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 173,
                            "end": 193
                          },
                          "start": 164,
                          "end": 193
                        },
                        "definite": false,
                        "start": 160,
                        "end": 193
                      }
                    ],
                    "declare": false,
                    "start": 156,
                    "end": 194
                  }
                ],
                "start": 146,
                "end": 200
              },
              "expression": false,
              "start": 143,
              "end": 200
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 128,
            "end": 200
          }
        ],
        "start": 68,
        "end": 202
      },
      "abstract": false,
      "declare": false,
      "start": 54,
      "end": 202
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 54,
  "end": 202
}
```
