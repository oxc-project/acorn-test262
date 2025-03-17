__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 13,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 24,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 185,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 183,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 61,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 183,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 183,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 75,
                    "end": 177,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 79,
                        "end": 177,
                        "id": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 80,
                          "name": "D",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ClassExpression",
                          "start": 83,
                          "end": 177,
                          "id": null,
                          "superClass": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 98,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "body": {
                            "type": "ClassBody",
                            "start": 99,
                            "end": 177,
                            "body": [
                              {
                                "type": "MethodDefinition",
                                "start": 113,
                                "end": 167,
                                "static": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 113,
                                  "end": 124,
                                  "name": "constructor",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "kind": "constructor",
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 124,
                                  "end": 167,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 127,
                                    "end": 167,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 145,
                                        "end": 153,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 145,
                                          "end": 152,
                                          "callee": {
                                            "type": "Super",
                                            "start": 145,
                                            "end": 150
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
                                "accessibility": null
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
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "accessibility": null
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
