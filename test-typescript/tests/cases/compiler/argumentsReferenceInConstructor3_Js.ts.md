__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 290,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 55,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 55,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 53,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 24,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 53,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 31,
                    "end": 50,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 38,
                      "end": 49,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 40,
                          "end": 47,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 40,
                            "end": 43,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 45,
                            "end": 47,
                            "properties": []
                          }
                        }
                      ]
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
        "end": 7,
        "decorators": [],
        "name": "A",
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
      "start": 57,
      "end": 290,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 290,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 288,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 148,
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
              "start": 148,
              "end": 288,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 288,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 163,
                    "end": 171,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 163,
                      "end": 170,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 163,
                        "end": 168
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 205,
                    "end": 220,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 205,
                      "end": 219,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 205,
                        "end": 213,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 205,
                          "end": 209
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 213,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 219,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 254,
                    "end": 285,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 254,
                      "end": 284,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 254,
                        "end": 262,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 254,
                          "end": 258
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 262,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 265,
                        "end": 284,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 265,
                          "end": 280,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 265,
                            "end": 270
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 271,
                            "end": 280,
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 281,
                          "end": 284,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 149,
                  "end": 157,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 152,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 155,
                    "end": 157,
                    "properties": []
                  },
                  "typeAnnotation": null
                }
              ],
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
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "A",
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
