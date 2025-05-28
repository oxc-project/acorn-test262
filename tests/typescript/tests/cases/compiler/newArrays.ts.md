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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 22,
              "end": 24,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 26,
            "end": 163,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "Gar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 36,
              "end": 163,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 40,
                  "end": 57,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 49,
                    "decorators": [],
                    "name": "fa",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 60,
                  "end": 74,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "start": 71,
                    "end": 73,
                    "value": 10,
                    "raw": "10"
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 77,
                  "end": 91,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "start": 88,
                    "end": 90,
                    "value": 10,
                    "raw": "10"
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 95,
                  "end": 160,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 104,
                    "end": 160,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                                "decorators": [],
                                "name": "fa",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "NewExpression",
                              "start": 122,
                              "end": 153,
                              "callee": {
                                "type": "Identifier",
                                "start": 126,
                                "end": 131,
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null
                              },
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
                                      "decorators": [],
                                      "name": "Foo",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
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
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
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
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                }
                              ]
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
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
