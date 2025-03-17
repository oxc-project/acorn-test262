__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 173,
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
      "end": 173,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 173,
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
            "end": 171,
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
              "end": 171,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 171,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 97,
                    "end": 105,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 97,
                      "end": 104,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 97,
                        "end": 102
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 114,
                    "end": 119,
                    "directive": null,
                    "expression": {
                      "type": "ThisExpression",
                      "start": 114,
                      "end": 118
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 140,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 128,
                      "end": 139,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 134,
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
                          "end": 134,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 137,
                        "end": 139,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 149,
                    "end": 165,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 153,
                        "end": 164,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 157,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 160,
                          "end": 164
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
