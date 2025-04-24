__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 207,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 30,
            "properties": [
              {
                "type": "Property",
                "start": 15,
                "end": 28,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 24,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 26,
                  "end": 28,
                  "properties": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 207,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 82,
            "end": 205,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 205,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 205,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 143,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 128,
                      "end": 142,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 136,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 128,
                          "end": 132
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 136,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 142,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 177,
                    "end": 202,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 177,
                      "end": 201,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 177,
                        "end": 185,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 177,
                          "end": 181
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 185,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 188,
                        "end": 201,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 191,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 201,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                  "type": "AssignmentPattern",
                  "start": 84,
                  "end": 92,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 87,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 90,
                    "end": 92,
                    "properties": []
                  },
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
        "start": 38,
        "end": 39,
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
