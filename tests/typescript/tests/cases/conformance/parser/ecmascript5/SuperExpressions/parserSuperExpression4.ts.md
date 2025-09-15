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
          "start": 71,
          "end": 73
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "M2",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 76
        },
        "start": 71,
        "end": 76
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
              "start": 89,
              "end": 90
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
                    "start": 109,
                    "end": 112
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
                                "start": 129,
                                "end": 134
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 135,
                                "end": 138
                              },
                              "optional": false,
                              "computed": false,
                              "start": 129,
                              "end": 138
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 141,
                              "end": 142
                            },
                            "start": 129,
                            "end": 142
                          },
                          "directive": null,
                          "start": 129,
                          "end": 142
                        }
                      ],
                      "start": 115,
                      "end": 152
                    },
                    "expression": false,
                    "start": 112,
                    "end": 152
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 101,
                  "end": 152
                }
              ],
              "start": 91,
              "end": 158
            },
            "abstract": false,
            "declare": false,
            "start": 83,
            "end": 158
          }
        ],
        "start": 77,
        "end": 160
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 61,
      "end": 160
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 160
}
```
