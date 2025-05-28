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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 40,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "__x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 39,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 27,
                "end": 39,
                "typeParameters": null,
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 85,
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
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 85,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 70,
                        "end": 74
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 78,
                        "decorators": [],
                        "name": "__x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 152,
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
            "value": {
              "type": "FunctionExpression",
              "start": 95,
              "end": 152,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "typeParameters": null,
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
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 152,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 146,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 128,
                      "end": 145,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 136,
                        "object": {
                          "type": "ThisExpression",
                          "start": 128,
                          "end": 132
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 136,
                          "decorators": [],
                          "name": "__x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 156,
      "end": 198,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 174,
        "end": 198,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 180,
            "end": 196,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 195,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 183,
                "end": 195,
                "typeParameters": null,
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
