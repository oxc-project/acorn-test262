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
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 22,
              "end": 24
            },
            "abstract": false,
            "declare": false,
            "start": 12,
            "end": 24
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
              "start": 32,
              "end": 35
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
                    "start": 47,
                    "end": 49
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
                          "start": 51,
                          "end": 54
                        },
                        "typeArguments": null,
                        "start": 51,
                        "end": 54
                      },
                      "start": 51,
                      "end": 56
                    },
                    "start": 49,
                    "end": 56
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
                  "start": 40,
                  "end": 57
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
                    "start": 67,
                    "end": 68
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 71,
                    "end": 73
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 60,
                  "end": 74
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
                    "start": 84,
                    "end": 85
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 88,
                    "end": 90
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 77,
                  "end": 91
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
                    "start": 102,
                    "end": 103
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
                                "start": 112,
                                "end": 116
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fa",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 117,
                                "end": 119
                              },
                              "optional": false,
                              "computed": false,
                              "start": 112,
                              "end": 119
                            },
                            "right": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 126,
                                "end": 131
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
                                      "start": 132,
                                      "end": 135
                                    },
                                    "typeArguments": null,
                                    "start": 132,
                                    "end": 135
                                  }
                                ],
                                "start": 131,
                                "end": 136
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 137,
                                      "end": 141
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 142,
                                      "end": 143
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 137,
                                    "end": 143
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 146,
                                      "end": 150
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 151,
                                      "end": 152
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 146,
                                    "end": 152
                                  },
                                  "start": 137,
                                  "end": 152
                                }
                              ],
                              "start": 122,
                              "end": 153
                            },
                            "start": 112,
                            "end": 153
                          },
                          "directive": null,
                          "start": 112,
                          "end": 154
                        }
                      ],
                      "start": 107,
                      "end": 160
                    },
                    "expression": false,
                    "start": 104,
                    "end": 160
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 95,
                  "end": 160
                }
              ],
              "start": 36,
              "end": 163
            },
            "abstract": false,
            "declare": false,
            "start": 26,
            "end": 163
          }
        ],
        "start": 9,
        "end": 165
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 165
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 165
}
```
