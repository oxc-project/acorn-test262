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
        "name": "A",
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
        "body": [],
        "start": 8,
        "end": 11
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 20
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 21,
        "end": 24
      },
      "abstract": false,
      "declare": false,
      "start": 13,
      "end": 24
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 33
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 61
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 79,
                          "end": 80
                        },
                        "init": {
                          "type": "ClassExpression",
                          "decorators": [],
                          "id": null,
                          "typeParameters": null,
                          "superClass": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 97,
                            "end": 98
                          },
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
                                  "name": "constructor",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 113,
                                  "end": 124
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
                                            "type": "Super",
                                            "start": 145,
                                            "end": 150
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false,
                                          "start": 145,
                                          "end": 152
                                        },
                                        "directive": null,
                                        "start": 145,
                                        "end": 153
                                      }
                                    ],
                                    "start": 127,
                                    "end": 167
                                  },
                                  "expression": false,
                                  "start": 124,
                                  "end": 167
                                },
                                "kind": "constructor",
                                "computed": false,
                                "static": false,
                                "override": false,
                                "optional": false,
                                "accessibility": null,
                                "start": 113,
                                "end": 167
                              }
                            ],
                            "start": 99,
                            "end": 177
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 83,
                          "end": 177
                        },
                        "definite": false,
                        "start": 79,
                        "end": 177
                      }
                    ],
                    "declare": false,
                    "start": 75,
                    "end": 177
                  }
                ],
                "start": 64,
                "end": 183
              },
              "expression": false,
              "start": 61,
              "end": 183
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 50,
            "end": 183
          }
        ],
        "start": 44,
        "end": 185
      },
      "abstract": false,
      "declare": false,
      "start": 26,
      "end": 185
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 185
}
```
