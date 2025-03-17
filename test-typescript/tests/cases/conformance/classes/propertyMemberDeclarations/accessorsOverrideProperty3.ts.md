__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 187,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 42,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 40,
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
      "start": 43,
      "end": 186,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 186,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 90,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 81,
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
              "start": 84,
              "end": 90,
              "raw": "'grrr'",
              "value": "grrr"
            }
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 129,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 104,
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
              "start": 104,
              "end": 129,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 107,
                "end": 129,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 109,
                    "end": 127,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 116,
                      "end": 127,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 116,
                        "end": 120
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 127,
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
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 148,
            "end": 184,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 157,
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
              "start": 157,
              "end": 184,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 163,
                "end": 184,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 182,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 165,
                      "end": 182,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 165,
                        "end": 176,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 165,
                          "end": 169
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 170,
                          "end": 176,
                          "decorators": [],
                          "name": "_sound",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 182,
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
                  "start": 158,
                  "end": 161,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 49,
        "end": 53,
        "decorators": [],
        "name": "Lion",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 62,
        "end": 68,
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
