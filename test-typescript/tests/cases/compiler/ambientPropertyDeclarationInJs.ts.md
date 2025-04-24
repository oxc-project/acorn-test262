__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 134,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 134,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 61,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
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
              "start": 27,
              "end": 61,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 61,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 40,
                    "end": 55,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 40,
                      "end": 54,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 40,
                        "end": 49,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 40,
                          "end": 44
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 45,
                          "end": 49,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 52,
                        "end": 54,
                        "properties": []
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
            "type": "PropertyDefinition",
            "start": 67,
            "end": 88,
            "accessibility": null,
            "computed": false,
            "declare": true,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 94,
            "end": 132,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 100,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 132,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 132,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 113,
                    "end": 126,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 113,
                      "end": 126,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 113,
                        "end": 122,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 113,
                          "end": 117
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 122,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 126,
                        "decorators": [],
                        "name": "foo",
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
          }
        ]
      },
      "declare": false,
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
