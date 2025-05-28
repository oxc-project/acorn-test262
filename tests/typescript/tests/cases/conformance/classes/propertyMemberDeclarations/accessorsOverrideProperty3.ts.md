__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 42,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 40,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "sound",
              "optional": false,
              "typeAnnotation": null
            },
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 43,
      "end": 186,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 186,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 90,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 81,
              "decorators": [],
              "name": "_sound",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 84,
              "end": 90,
              "value": "grrr",
              "raw": "'grrr'"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 129,
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
            "value": {
              "type": "FunctionExpression",
              "start": 104,
              "end": 129,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 116,
                        "end": 120
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 127,
                        "decorators": [],
                        "name": "_sound",
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
            "start": 148,
            "end": 184,
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
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 184,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 163,
                "end": 184,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 182,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 165,
                      "end": 182,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 165,
                        "end": 176,
                        "object": {
                          "type": "ThisExpression",
                          "start": 165,
                          "end": 169
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 170,
                          "end": 176,
                          "decorators": [],
                          "name": "_sound",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
