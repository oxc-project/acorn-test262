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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 59,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 57,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 57,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "name": "M1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 71,
          "end": 73,
          "name": "M2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 88,
              "end": 155,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 98,
                  "end": 149,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 109,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 109,
                    "end": 149,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
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
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
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
