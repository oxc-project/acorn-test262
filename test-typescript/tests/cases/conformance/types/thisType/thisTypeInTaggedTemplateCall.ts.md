__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 122,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 120,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 120,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 45,
                  "name": "this",
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 85,
                  "name": "strings",
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
                            "name": "TemplateStringsArray",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 129,
          "end": 135,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 129,
              "end": 135,
              "value": {
                "cooked": "test",
                "raw": "test"
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
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
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 144,
          "end": 150,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 144,
              "end": 150,
              "value": {
                "cooked": "test",
                "raw": "test"
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
