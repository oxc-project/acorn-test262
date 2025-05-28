__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 140,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 21,
        "decorators": [],
        "name": "TestProgressBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 140,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 49,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 40,
              "decorators": [],
              "name": "total",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 138,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 66,
              "decorators": [],
              "name": "total",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 66,
              "end": 138,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 67,
                  "end": 80,
                  "decorators": [],
                  "name": "total",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 72,
                    "end": 80,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 74,
                      "end": 80
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 82,
                "end": 138,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 92,
                    "end": 111,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 92,
                      "end": 110,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 92,
                        "end": 102,
                        "object": {
                          "type": "ThisExpression",
                          "start": 92,
                          "end": 96
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 102,
                          "decorators": [],
                          "name": "total",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 110,
                        "decorators": [],
                        "name": "total",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 120,
                    "end": 132,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 127,
                      "end": 131
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
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
