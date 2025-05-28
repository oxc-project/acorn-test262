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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 30,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 24,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 26,
                  "end": 28,
                  "properties": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 207,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 82,
            "end": 205,
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
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 205,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                  "right": {
                    "type": "ObjectExpression",
                    "start": 90,
                    "end": 92,
                    "properties": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 205,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 143,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 128,
                      "end": 142,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 136,
                        "object": {
                          "type": "ThisExpression",
                          "start": 128,
                          "end": 132
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 136,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 177,
                    "end": 202,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 177,
                      "end": 201,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 177,
                        "end": 185,
                        "object": {
                          "type": "ThisExpression",
                          "start": 177,
                          "end": 181
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 185,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 188,
                        "end": 201,
                        "object": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 191,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 201,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
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
