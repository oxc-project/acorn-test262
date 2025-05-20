__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 259,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 49,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 49,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 47,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 47,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 21,
                "end": 47,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 31,
                    "end": 41,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 31,
                      "end": 41,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 31,
                        "end": 37,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 31,
                          "end": 35
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 37,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 40,
                        "end": 41,
                        "raw": "1",
                        "value": 1
                      }
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
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
      "start": 50,
      "end": 259,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 77,
        "end": 259,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 216,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 94,
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
              "start": 94,
              "end": 216,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 97,
                "end": 216,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 107,
                    "end": 115,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 107,
                      "end": 114,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 107,
                        "end": 112
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 200,
                    "end": 210,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 200,
                      "end": 210,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 200,
                        "end": 206,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 200,
                          "end": 204
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 209,
                        "end": 210,
                        "raw": "1",
                        "value": 1
                      }
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
          },
          {
            "type": "MethodDefinition",
            "start": 221,
            "end": 257,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 225,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 225,
              "end": 257,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 228,
                "end": 257,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 238,
                    "end": 251,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 245,
                      "end": 251,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 245,
                        "end": 249
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
        "start": 56,
        "end": 63,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "decorators": [],
        "name": "Base",
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
