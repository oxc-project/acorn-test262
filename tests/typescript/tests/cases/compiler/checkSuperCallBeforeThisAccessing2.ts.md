__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 180,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 15,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
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
      "start": 16,
      "end": 180,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 67,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
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
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 178,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 83,
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
              "start": 83,
              "end": 178,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 178,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 96,
                    "end": 109,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 96,
                      "end": 108,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 96,
                        "end": 102,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 96,
                          "end": 100
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 102,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 105,
                        "end": 108,
                        "raw": "100",
                        "value": 100
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 118,
                    "end": 126,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 118,
                      "end": 125,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 118,
                        "end": 123
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 135,
                    "end": 147,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 135,
                      "end": 146,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 135,
                        "end": 141,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 135,
                          "end": 139
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 144,
                        "end": 146,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 156,
                    "end": 172,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 160,
                        "end": 171,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 160,
                          "end": 164,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 167,
                          "end": 171
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
        "start": 22,
        "end": 29,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 38,
        "end": 43,
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
