__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
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
      "end": 244,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 244,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 242,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
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
              "start": 118,
              "end": 242,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 129,
                "end": 242,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 163,
                    "end": 176,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 163,
                      "end": 175,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 163,
                        "end": 169,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 163,
                          "end": 167
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 175,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 210,
                    "end": 239,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 210,
                      "end": 238,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 210,
                        "end": 216,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 210,
                          "end": 214
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 216,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 219,
                        "end": 238,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 219,
                          "end": 234,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 219,
                            "end": 224
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 234,
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 238,
                          "decorators": [],
                          "name": "bar",
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
                  "start": 119,
                  "end": 127,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 122,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 125,
                    "end": 127,
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
