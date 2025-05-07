__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 424,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 424,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 424,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 14,
            "end": 31,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 15,
                "end": 24,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 16,
                  "end": 24,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 18,
                    "end": 24
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 30,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 36,
              "end": 40,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 43,
              "end": 44,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 73,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 51,
              "end": 57,
              "raw": "\"#bar\"",
              "value": "#bar",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 61,
              "end": 73,
              "computed": true,
              "object": {
                "type": "ThisExpression",
                "start": 61,
                "end": 65
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 66,
                "end": 72,
                "raw": "\"#bar\"",
                "value": "#bar",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 165,
            "end": 422,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 176,
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
              "start": 176,
              "end": 422,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 422,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 204,
                    "end": 215,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 204,
                      "end": 215,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 204,
                        "end": 211,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 204,
                          "end": 208
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 209,
                          "end": 211,
                          "name": "f"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 214,
                        "end": 215,
                        "raw": "3",
                        "value": 3,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 302,
                    "end": 319,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 302,
                      "end": 318,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 302,
                        "end": 314,
                        "computed": true,
                        "object": {
                          "type": "ThisExpression",
                          "start": 302,
                          "end": 306
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 307,
                          "end": 313,
                          "raw": "\"#foo\"",
                          "value": "#foo",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 317,
                        "end": 318,
                        "raw": "3",
                        "value": 3,
                        "regex": null,
                        "bigint": null
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
                  "start": 177,
                  "end": 192,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 184,
                    "end": 192,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 186,
                      "end": 192
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
        "name": "A",
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
