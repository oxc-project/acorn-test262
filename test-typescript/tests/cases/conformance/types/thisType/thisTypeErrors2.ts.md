__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 206,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 45,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 45,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 29,
                  "end": 36,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 32,
                      "end": 36
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 68,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 61,
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 61,
        "end": 64,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 63,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 205,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 205,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 89,
            "end": 99,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 203,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 203,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 144,
                "end": 203,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 154,
                    "end": 176,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 158,
                        "end": 175,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 158,
                          "end": 168,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 162,
                            "end": 168,
                            "typeAnnotation": {
                              "type": "TSThisType",
                              "start": 164,
                              "end": 168
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 171,
                          "end": 175
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 185,
                    "end": 197,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 185,
                      "end": 196,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 185,
                        "end": 191,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 185,
                          "end": 189
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 191,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 194,
                        "end": 196,
                        "raw": "12",
                        "value": 12
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 116,
                  "end": 142,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 142,
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 127,
                      "end": 142,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 129,
                        "end": 142,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 136,
                          "end": 142,
                          "params": [
                            {
                              "type": "TSThisType",
                              "start": 137,
                              "end": 141
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 136,
                          "decorators": [],
                          "name": "Generic",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 82,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
