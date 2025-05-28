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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 55,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 53,
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
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 53,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 40,
                            "end": 43,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 45,
                            "end": 47,
                            "properties": []
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 290,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 290,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 288,
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
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 288,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                  "right": {
                    "type": "ObjectExpression",
                    "start": 155,
                    "end": 157,
                    "properties": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 288,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 163,
                    "end": 171,
                    "expression": {
                      "type": "CallExpression",
                      "start": 163,
                      "end": 170,
                      "callee": {
                        "type": "Super",
                        "start": 163,
                        "end": 168
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 205,
                    "end": 220,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 205,
                      "end": 219,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 205,
                        "end": 213,
                        "object": {
                          "type": "ThisExpression",
                          "start": 205,
                          "end": 209
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 213,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 254,
                    "end": 285,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 254,
                      "end": 284,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 254,
                        "end": 262,
                        "object": {
                          "type": "ThisExpression",
                          "start": 254,
                          "end": 258
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 262,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 265,
                        "end": 284,
                        "object": {
                          "type": "MemberExpression",
                          "start": 265,
                          "end": 280,
                          "object": {
                            "type": "Super",
                            "start": 265,
                            "end": 270
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 271,
                            "end": 280,
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 281,
                          "end": 284,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
