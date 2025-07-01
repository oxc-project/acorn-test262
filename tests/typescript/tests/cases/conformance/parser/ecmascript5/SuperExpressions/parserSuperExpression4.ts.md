__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 25
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 38,
                          "end": 43
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 44,
                          "end": 47
                        },
                        "optional": false,
                        "computed": false,
                        "start": 38,
                        "end": 47
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 50,
                        "end": 51
                      },
                      "start": 38,
                      "end": 51
                    },
                    "directive": null,
                    "start": 38,
                    "end": 51
                  }
                ],
                "start": 28,
                "end": 57
              },
              "expression": false,
              "start": 25,
              "end": 57
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 14,
            "end": 57
          }
        ],
        "start": 8,
        "end": 59
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 70
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "M2",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 73
        },
        "start": 68,
        "end": 73
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 109
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 126,
                                "end": 131
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 132,
                                "end": 135
                              },
                              "optional": false,
                              "computed": false,
                              "start": 126,
                              "end": 135
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 138,
                              "end": 139
                            },
                            "start": 126,
                            "end": 139
                          },
                          "directive": null,
                          "start": 126,
                          "end": 139
                        }
                      ],
                      "start": 112,
                      "end": 149
                    },
                    "expression": false,
                    "start": 109,
                    "end": 149
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 98,
                  "end": 149
                }
              ],
              "start": 88,
              "end": 155
            },
            "abstract": false,
            "declare": false,
            "start": 80,
            "end": 155
          }
        ],
        "start": 74,
        "end": 157
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 61,
      "end": 157
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 157
}
```
