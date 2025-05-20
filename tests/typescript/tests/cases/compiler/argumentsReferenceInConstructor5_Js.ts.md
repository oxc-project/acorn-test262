__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
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
      "end": 237,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 237,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 235,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 113,
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
              "start": 113,
              "end": 235,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 124,
                "end": 235,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 158,
                    "end": 173,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 158,
                      "end": 172,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 158,
                        "end": 166,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 158,
                          "end": 162
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 166,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 172,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 207,
                    "end": 232,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 207,
                      "end": 231,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 207,
                        "end": 215,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 207,
                          "end": 211
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 215,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 218,
                        "end": 231,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 221,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 231,
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
                  "start": 114,
                  "end": 122,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 117,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 120,
                    "end": 122,
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
