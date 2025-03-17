__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 280,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 21,
                "end": 34,
                "id": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 34,
                  "name": "outer",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 28,
                      "end": 34
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
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
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 54,
              "end": 98,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 65,
                  "end": 83,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 69,
                      "end": 82,
                      "id": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 74,
                        "name": "inner",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 82,
                        "name": "outer",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
          {
            "type": "ClassDeclaration",
            "start": 104,
            "end": 194,
            "id": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 112,
              "end": 194,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 123,
                  "end": 187,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 134,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 134,
                    "end": 187,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 137,
                      "end": 187,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 151,
                          "end": 169,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 155,
                              "end": 168,
                              "id": {
                                "type": "Identifier",
                                "start": 155,
                                "end": 160,
                                "name": "inner",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Identifier",
                                "start": 163,
                                "end": 168,
                                "name": "outer",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
          },
          {
            "type": "TSModuleDeclaration",
            "start": 200,
            "end": 275,
            "id": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 224,
                      "end": 237,
                      "id": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 229,
                        "name": "inner",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 237,
                        "name": "outer",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
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
