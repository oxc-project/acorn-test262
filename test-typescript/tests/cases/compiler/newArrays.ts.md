__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 165,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 165,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 12,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 22,
              "end": 24,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 26,
            "end": 163,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "name": "Gar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 36,
              "end": 163,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 40,
                  "end": 57,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 49,
                    "name": "fa",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 56,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 51,
                      "end": 56,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 51,
                        "end": 54,
                        "typeName": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 54,
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 60,
                  "end": 74,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 71,
                    "end": 73,
                    "value": 10,
                    "raw": "10"
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 77,
                  "end": 91,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 88,
                    "end": 90,
                    "value": 10,
                    "raw": "10"
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 95,
                  "end": 160,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 104,
                    "end": 160,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 107,
                      "end": 160,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 112,
                          "end": 154,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 112,
                            "end": 153,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 112,
                              "end": 119,
                              "object": {
                                "type": "ThisExpression",
                                "start": 112,
                                "end": 116
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 117,
                                "end": 119,
                                "name": "fa",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "NewExpression",
                              "start": 122,
                              "end": 153,
                              "callee": {
                                "type": "Identifier",
                                "start": 126,
                                "end": 131,
                                "name": "Array",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "start": 137,
                                  "end": 152,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 137,
                                    "end": 143,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 137,
                                      "end": 141
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 142,
                                      "end": 143,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 146,
                                    "end": 152,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 146,
                                      "end": 150
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 151,
                                      "end": 152,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  }
                                }
                              ],
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 131,
                                "end": 136,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 132,
                                    "end": 135,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 132,
                                      "end": 135,
                                      "name": "Foo",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
