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
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 24
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 25,
              "end": 27
            },
            "abstract": false,
            "declare": false,
            "start": 15,
            "end": 27
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Gar",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 38
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
                    "name": "fa",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 52
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 54,
                          "end": 57
                        },
                        "typeArguments": null,
                        "start": 54,
                        "end": 57
                      },
                      "start": 54,
                      "end": 59
                    },
                    "start": 52,
                    "end": 59
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
                  "start": 43,
                  "end": 60
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 71
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 74,
                    "end": 76
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 63,
                  "end": 77
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 88
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 91,
                    "end": 93
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 80,
                  "end": 94
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 106
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
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 115,
                                "end": 119
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fa",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 120,
                                "end": 122
                              },
                              "optional": false,
                              "computed": false,
                              "start": 115,
                              "end": 122
                            },
                            "right": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 129,
                                "end": 134
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Foo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 135,
                                      "end": 138
                                    },
                                    "typeArguments": null,
                                    "start": 135,
                                    "end": 138
                                  }
                                ],
                                "start": 134,
                                "end": 139
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 140,
                                      "end": 144
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 145,
                                      "end": 146
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 140,
                                    "end": 146
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 149,
                                      "end": 153
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 154,
                                      "end": 155
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 149,
                                    "end": 155
                                  },
                                  "start": 140,
                                  "end": 155
                                }
                              ],
                              "start": 125,
                              "end": 156
                            },
                            "start": 115,
                            "end": 156
                          },
                          "directive": null,
                          "start": 115,
                          "end": 157
                        }
                      ],
                      "start": 110,
                      "end": 163
                    },
                    "expression": false,
                    "start": 107,
                    "end": 163
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 98,
                  "end": 163
                }
              ],
              "start": 39,
              "end": 166
            },
            "abstract": false,
            "declare": false,
            "start": 29,
            "end": 166
          }
        ],
        "start": 12,
        "end": 168
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 168
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 168
}
```
