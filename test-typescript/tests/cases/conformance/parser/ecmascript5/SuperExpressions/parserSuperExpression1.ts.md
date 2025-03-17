__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 58,
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
        "end": 58,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 56,
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
              "end": 56,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 56,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 38,
                    "end": 50,
                    "expression": {
                      "type": "CallExpression",
                      "start": 38,
                      "end": 49,
                      "callee": {
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
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
      "start": 60,
      "end": 155,
      "id": {
        "type": "TSQualifiedName",
        "start": 67,
        "end": 72,
        "left": {
          "type": "Identifier",
          "start": 67,
          "end": 69,
          "name": "M1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 70,
          "end": 72,
          "name": "M2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 73,
        "end": 155,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 79,
            "end": 153,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 87,
              "end": 153,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 97,
                  "end": 147,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 108,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 108,
                    "end": 147,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 111,
                      "end": 147,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 125,
                          "end": 137,
                          "expression": {
                            "type": "CallExpression",
                            "start": 125,
                            "end": 136,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 125,
                              "end": 134,
                              "object": {
                                "type": "Super",
                                "start": 125,
                                "end": 130
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 131,
                                "end": 134,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
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
