__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 122,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
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
        "start": 10,
        "end": 122,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 120,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 120,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 24,
                "end": 27,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 25,
                    "end": 26,
                    "name": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 26,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 45,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 34,
                      "end": 45,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 41,
                        "end": 45,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 44,
                          "end": 45,
                          "typeName": {
                            "type": "Identifier",
                            "start": 44,
                            "end": 45,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 85,
                  "decorators": [],
                  "name": "strings",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 56,
                      "end": 85,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 56,
                          "end": 76,
                          "typeName": {
                            "type": "Identifier",
                            "start": 56,
                            "end": 76,
                            "decorators": [],
                            "name": "TemplateStringsArray",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 120,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 97,
                    "end": 114,
                    "argument": {
                      "type": "NewExpression",
                      "start": 104,
                      "end": 114,
                      "callee": {
                        "type": "ThisExpression",
                        "start": 108,
                        "end": 112
                      },
                      "typeArguments": null,
                      "arguments": []
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
      "type": "ExpressionStatement",
      "start": 124,
      "end": 136,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 124,
        "end": 135,
        "tag": {
          "type": "MemberExpression",
          "start": 124,
          "end": 129,
          "object": {
            "type": "Identifier",
            "start": 124,
            "end": 127,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 129,
          "end": 135,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 129,
              "end": 135,
              "value": {
                "raw": "test",
                "cooked": "test"
              },
              "tail": true
            }
          ],
          "expressions": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 151,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 137,
        "end": 150,
        "tag": {
          "type": "MemberExpression",
          "start": 138,
          "end": 143,
          "object": {
            "type": "Identifier",
            "start": 138,
            "end": 141,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 144,
          "end": 150,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 144,
              "end": 150,
              "value": {
                "raw": "test",
                "cooked": "test"
              },
              "tail": true
            }
          ],
          "expressions": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
