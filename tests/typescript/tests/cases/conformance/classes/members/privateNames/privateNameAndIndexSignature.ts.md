__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 18,
                    "end": 24
                  },
                  "start": 16,
                  "end": 24
                },
                "start": 15,
                "end": 24
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              },
              "start": 25,
              "end": 30
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 14,
            "end": 31
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 36,
              "end": 40
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 43,
              "end": 44
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 36,
            "end": 45
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "#bar",
              "raw": "\"#bar\"",
              "start": 51,
              "end": 57
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 61,
                "end": 65
              },
              "property": {
                "type": "Literal",
                "value": "#bar",
                "raw": "\"#bar\"",
                "start": 66,
                "end": 72
              },
              "optional": false,
              "computed": true,
              "start": 61,
              "end": 73
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 50,
            "end": 73
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 176
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 186,
                      "end": 192
                    },
                    "start": 184,
                    "end": 192
                  },
                  "start": 177,
                  "end": 192
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 204,
                          "end": 208
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "f",
                          "start": 209,
                          "end": 211
                        },
                        "optional": false,
                        "computed": false,
                        "start": 204,
                        "end": 211
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 214,
                        "end": 215
                      },
                      "start": 204,
                      "end": 215
                    },
                    "directive": null,
                    "start": 204,
                    "end": 215
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 302,
                          "end": 306
                        },
                        "property": {
                          "type": "Literal",
                          "value": "#foo",
                          "raw": "\"#foo\"",
                          "start": 307,
                          "end": 313
                        },
                        "optional": false,
                        "computed": true,
                        "start": 302,
                        "end": 314
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 317,
                        "end": 318
                      },
                      "start": 302,
                      "end": 318
                    },
                    "directive": null,
                    "start": 302,
                    "end": 319
                  }
                ],
                "start": 194,
                "end": 422
              },
              "expression": false,
              "start": 176,
              "end": 422
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 165,
            "end": 422
          }
        ],
        "start": 8,
        "end": 424
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 424
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 424
}
```
