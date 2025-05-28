__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 59,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
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
        "end": 59,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 57,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 57,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 57,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 38,
                    "end": 51,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 38,
                      "end": 51,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 38,
                        "end": 47,
                        "object": {
                          "type": "Super",
                          "start": 38,
                          "end": 43
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 44,
                          "end": 47,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 50,
                        "end": 51,
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 61,
      "end": 157,
      "id": {
        "type": "TSQualifiedName",
        "start": 68,
        "end": 73,
        "left": {
          "type": "Identifier",
          "start": 68,
          "end": 70,
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 71,
          "end": 73,
          "decorators": [],
          "name": "M2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 74,
        "end": 157,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 80,
            "end": 155,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 88,
              "end": 155,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 98,
                  "end": 149,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 109,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 109,
                    "end": 149,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 112,
                      "end": 149,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 126,
                          "end": 139,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 126,
                            "end": 139,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 126,
                              "end": 135,
                              "object": {
                                "type": "Super",
                                "start": 126,
                                "end": 131
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 132,
                                "end": 135,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 138,
                              "end": 139,
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
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
