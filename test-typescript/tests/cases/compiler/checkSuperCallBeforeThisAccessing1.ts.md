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
      "end": 173,
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
        "end": 173,
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
            "end": 171,
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
              "end": 171,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 171,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 97,
                    "end": 105,
                    "expression": {
                      "type": "CallExpression",
                      "start": 97,
                      "end": 104,
                      "callee": {
                        "type": "Super",
                        "start": 97,
                        "end": 102
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 114,
                    "end": 119,
                    "expression": {
                      "type": "ThisExpression",
                      "start": 114,
                      "end": 118
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 140,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 128,
                      "end": 139,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 134,
                        "object": {
                          "type": "ThisExpression",
                          "start": 128,
                          "end": 132
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
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
                        "start": 137,
                        "end": 139,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
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
                        "id": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 157,
                          "name": "that",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 160,
                          "end": 164
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
