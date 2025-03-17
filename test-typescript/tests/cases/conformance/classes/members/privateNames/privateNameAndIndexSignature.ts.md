__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 425,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 424,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 424,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 14,
            "end": 31,
            "parameters": [
              {
                "type": "Identifier",
                "start": 15,
                "end": 24,
                "name": "k",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 16,
                  "end": 24,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 18,
                    "end": 24
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 30,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 45,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 36,
              "end": 40,
              "name": "foo"
            },
            "value": {
              "type": "Literal",
              "start": 43,
              "end": 44,
              "value": 3,
              "raw": "3"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 73,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 51,
              "end": 57,
              "value": "#bar",
              "raw": "\"#bar\""
            },
            "value": {
              "type": "MemberExpression",
              "start": 61,
              "end": 73,
              "object": {
                "type": "ThisExpression",
                "start": 61,
                "end": 65
              },
              "property": {
                "type": "Literal",
                "start": 66,
                "end": 72,
                "value": "#bar",
                "raw": "\"#bar\""
              },
              "computed": true,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 165,
            "end": 422,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 176,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 422,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 192,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 184,
                    "end": 192,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 186,
                      "end": 192
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 422,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 204,
                    "end": 215,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 204,
                      "end": 215,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 204,
                        "end": 211,
                        "object": {
                          "type": "ThisExpression",
                          "start": 204,
                          "end": 208
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 209,
                          "end": 211,
                          "name": "f"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 214,
                        "end": 215,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 302,
                    "end": 319,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 302,
                      "end": 318,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 302,
                        "end": 314,
                        "object": {
                          "type": "ThisExpression",
                          "start": 302,
                          "end": 306
                        },
                        "property": {
                          "type": "Literal",
                          "start": 307,
                          "end": 313,
                          "value": "#foo",
                          "raw": "\"#foo\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 317,
                        "end": 318,
                        "value": 3,
                        "raw": "3"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
