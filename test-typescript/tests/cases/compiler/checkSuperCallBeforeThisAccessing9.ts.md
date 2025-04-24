__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 230,
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
      "start": 40,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 71,
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
              "start": 71,
              "end": 141,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 141,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 84,
                    "end": 89,
                    "directive": null,
                    "expression": {
                      "type": "ThisExpression",
                      "start": 84,
                      "end": 88
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 98,
                    "end": 110,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 98,
                      "end": 109,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 98,
                        "end": 104,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 98,
                          "end": 102
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 104,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 107,
                        "end": 109,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 119,
                    "end": 135,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 123,
                        "end": 134,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 127,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
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
        "start": 46,
        "end": 53,
        "decorators": [],
        "name": "Derived",
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
      "start": 169,
      "end": 230,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 184,
        "end": 230,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 190,
            "end": 228,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 201,
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
              "start": 201,
              "end": 228,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 204,
                "end": 228,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 214,
                    "end": 222,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 214,
                      "end": 221,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 214,
                        "end": 219
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
        "start": 175,
        "end": 183,
        "decorators": [],
        "name": "Derived2",
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
