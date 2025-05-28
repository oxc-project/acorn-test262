__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 35,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 23,
            "end": 33,
            "expression": {
              "type": "AssignmentExpression",
              "start": 23,
              "end": 33,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 23,
                "end": 29,
                "object": {
                  "type": "ThisExpression",
                  "start": 23,
                  "end": 27
                },
                "property": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 32,
                "end": 33,
                "value": 2,
                "raw": "2"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 106,
      "expression": {
        "type": "AssignmentExpression",
        "start": 36,
        "end": 106,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 36,
          "end": 47,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 41,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 47,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 50,
          "end": 106,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 58,
            "end": 106,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 64,
                "end": 104,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 75,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 75,
                  "end": 104,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 78,
                    "end": 104,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 88,
                        "end": 98,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 88,
                          "end": 98,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 88,
                            "end": 94,
                            "object": {
                              "type": "ThisExpression",
                              "start": 88,
                              "end": 92
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 97,
                            "end": 98,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "kind": "constructor",
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
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 134,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 134,
            "decorators": [],
            "name": "ok",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 139,
      "expression": {
        "type": "MemberExpression",
        "start": 135,
        "end": 139,
        "object": {
          "type": "Identifier",
          "start": 135,
          "end": 137,
          "decorators": [],
          "name": "ok",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 138,
          "end": 139,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 173,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 173,
            "decorators": [],
            "name": "oc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 178,
      "expression": {
        "type": "MemberExpression",
        "start": 174,
        "end": 178,
        "object": {
          "type": "Identifier",
          "start": 174,
          "end": 176,
          "decorators": [],
          "name": "oc",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 177,
          "end": 178,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
