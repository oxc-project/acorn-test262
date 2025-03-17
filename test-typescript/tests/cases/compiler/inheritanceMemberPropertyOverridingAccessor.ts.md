__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 40,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "__x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 39,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 27,
                "end": 39,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 39,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 33,
                    "end": 39
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 85,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 85,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 85,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 63,
                    "end": 79,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 70,
                      "end": 78,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 70,
                        "end": 74
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 78,
                        "decorators": [],
                        "name": "__x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 152,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 95,
              "end": 152,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 152,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 146,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 128,
                      "end": 145,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 136,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 128,
                          "end": 132
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 136,
                          "decorators": [],
                          "name": "__x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 145,
                        "decorators": [],
                        "name": "aValue",
                        "optional": false,
                        "typeAnnotation": null
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
                  "type": "Identifier",
                  "start": 96,
                  "end": 116,
                  "decorators": [],
                  "name": "aValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 102,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 104,
                      "end": 116,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 107,
                        "end": 116,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 110,
                          "end": 116
                        }
                      },
                      "typeParameters": null
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
        "end": 7,
        "decorators": [],
        "name": "a",
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
      "start": 156,
      "end": 198,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 174,
        "end": 198,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 180,
            "end": 196,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 195,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 183,
                "end": 195,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 186,
                  "end": 195,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 189,
                    "end": 195
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 163,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
