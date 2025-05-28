__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 279,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 278,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 17,
            "end": 35,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 21,
                "end": 34,
                "id": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 34,
                  "decorators": [],
                  "name": "outer",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 28,
                      "end": 34
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 41,
            "end": 98,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 54,
              "end": 98,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 65,
                  "end": 83,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 69,
                      "end": 82,
                      "id": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 74,
                        "decorators": [],
                        "name": "inner",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 82,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ClassDeclaration",
            "start": 104,
            "end": 194,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
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
              "start": 112,
              "end": 194,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 123,
                  "end": 187,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 134,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 134,
                    "end": 187,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 137,
                      "end": 187,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 151,
                          "end": 169,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 155,
                              "end": 168,
                              "id": {
                                "type": "Identifier",
                                "start": 155,
                                "end": 160,
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "Identifier",
                                "start": 163,
                                "end": 168,
                                "decorators": [],
                                "name": "outer",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
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
          },
          {
            "type": "TSModuleDeclaration",
            "start": 200,
            "end": 275,
            "id": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 209,
              "end": 275,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 220,
                  "end": 238,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 224,
                      "end": 237,
                      "id": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 229,
                        "decorators": [],
                        "name": "inner",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 237,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
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
