__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
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
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 172,
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
            "end": 170,
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
              "end": 170,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 170,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 96,
                    "end": 104,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 96,
                      "end": 103,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 96,
                        "end": 101
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 113,
                    "end": 118,
                    "directive": null,
                    "expression": {
                      "type": "ThisExpression",
                      "start": 113,
                      "end": 117
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 127,
                    "end": 139,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 127,
                      "end": 138,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 127,
                        "end": 133,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 127,
                          "end": 131
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 133,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 136,
                        "end": 138,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 148,
                    "end": 164,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 152,
                        "end": 163,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 156,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 159,
                          "end": 163
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
