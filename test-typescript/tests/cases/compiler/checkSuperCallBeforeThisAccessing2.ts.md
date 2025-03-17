__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 181,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 16,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Based",
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
      "start": 17,
      "end": 181,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 181,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 68,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 179,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 84,
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
              "start": 84,
              "end": 179,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 179,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 97,
                    "end": 110,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 97,
                      "end": 109,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 97,
                        "end": 103,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 97,
                          "end": 101
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 103,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 106,
                        "end": 109,
                        "raw": "100",
                        "value": 100
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 127,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 126,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 136,
                    "end": 148,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 136,
                      "end": 147,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 136,
                        "end": 142,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 136,
                          "end": 140
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 142,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 145,
                        "end": 147,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 157,
                    "end": 173,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 161,
                        "end": 172,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 165,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 168,
                          "end": 172
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
        "start": 23,
        "end": 30,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 39,
        "end": 44,
        "decorators": [],
        "name": "Based",
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
