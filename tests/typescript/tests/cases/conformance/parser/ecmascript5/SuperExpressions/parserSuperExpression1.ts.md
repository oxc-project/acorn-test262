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
                      "type": "CallExpression",
                      "callee": {
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
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 38,
                      "end": 49
                    },
                    "directive": null,
                    "start": 38,
                    "end": 50
                  }
                ],
                "start": 28,
                "end": 56
              },
              "expression": false,
              "start": 25,
              "end": 56
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 14,
            "end": 56
          }
        ],
        "start": 8,
        "end": 58
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 58
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
          "start": 67,
          "end": 69
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "M2",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 72
        },
        "start": 67,
        "end": 72
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
              "start": 85,
              "end": 86
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
                    "start": 105,
                    "end": 108
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
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 125,
                                "end": 130
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 131,
                                "end": 134
                              },
                              "optional": false,
                              "computed": false,
                              "start": 125,
                              "end": 134
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 125,
                            "end": 136
                          },
                          "directive": null,
                          "start": 125,
                          "end": 137
                        }
                      ],
                      "start": 111,
                      "end": 147
                    },
                    "expression": false,
                    "start": 108,
                    "end": 147
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 97,
                  "end": 147
                }
              ],
              "start": 87,
              "end": 153
            },
            "abstract": false,
            "declare": false,
            "start": 79,
            "end": 153
          }
        ],
        "start": 73,
        "end": 155
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 60,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
