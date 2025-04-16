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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "Based",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 30,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 39,
        "end": 44,
        "name": "Based",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 181,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 68,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 179,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 84,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 179,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 179,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 97,
                    "end": 110,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 97,
                      "end": 109,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 97,
                        "end": 103,
                        "object": {
                          "type": "ThisExpression",
                          "start": 97,
                          "end": 101
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 103,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 106,
                        "end": 109,
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 127,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 126,
                      "callee": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 136,
                    "end": 148,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 136,
                      "end": 147,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 136,
                        "end": 142,
                        "object": {
                          "type": "ThisExpression",
                          "start": 136,
                          "end": 140
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 142,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 145,
                        "end": 147,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
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
                        "id": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 165,
                          "name": "that",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 168,
                          "end": 172
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
