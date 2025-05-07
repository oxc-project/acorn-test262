__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 43,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "sound",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 20,
        "decorators": [],
        "name": "Animal",
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
      "start": 44,
      "end": 189,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 189,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 76,
            "end": 91,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 82,
              "decorators": [],
              "name": "_sound",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 85,
              "end": 91,
              "raw": "'roar'",
              "value": "roar",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 96,
            "end": 138,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 105,
              "decorators": [],
              "name": "sound",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 105,
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 138,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 118,
                    "end": 136,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 125,
                      "end": 136,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 125,
                        "end": 129
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 136,
                        "decorators": [],
                        "name": "_sound",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 107,
                "end": 115,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 109,
                  "end": 115
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 143,
            "end": 187,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 152,
              "decorators": [],
              "name": "sound",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 152,
              "end": 187,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 187,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 168,
                    "end": 185,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 168,
                      "end": 185,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 168,
                        "end": 179,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 168,
                          "end": 172
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 179,
                          "decorators": [],
                          "name": "_sound",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 185,
                        "decorators": [],
                        "name": "val",
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
                  "start": 153,
                  "end": 164,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 158,
                      "end": 164
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
        "start": 50,
        "end": 54,
        "decorators": [],
        "name": "Lion",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 63,
        "end": 69,
        "decorators": [],
        "name": "Animal",
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
