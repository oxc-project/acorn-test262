__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "outer",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 28,
                      "end": 34
                    },
                    "start": 26,
                    "end": 34
                  },
                  "start": 21,
                  "end": 34
                },
                "init": null,
                "definite": false,
                "start": 21,
                "end": 34
              }
            ],
            "declare": false,
            "start": 17,
            "end": 35
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
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
                        "name": "inner",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 69,
                        "end": 74
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 82
                      },
                      "definite": false,
                      "start": 69,
                      "end": 82
                    }
                  ],
                  "declare": false,
                  "start": 65,
                  "end": 83
                }
              ],
              "start": 54,
              "end": 98
            },
            "expression": false,
            "start": 41,
            "end": 98
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
              "start": 110,
              "end": 111
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 134
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
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 155,
                                "end": 160
                              },
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "outer",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 163,
                                "end": 168
                              },
                              "definite": false,
                              "start": 155,
                              "end": 168
                            }
                          ],
                          "declare": false,
                          "start": 151,
                          "end": 169
                        }
                      ],
                      "start": 137,
                      "end": 187
                    },
                    "expression": false,
                    "start": 134,
                    "end": 187
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 123,
                  "end": 187
                }
              ],
              "start": 112,
              "end": 194
            },
            "abstract": false,
            "declare": false,
            "start": 104,
            "end": 194
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 211
            },
            "body": {
              "type": "TSModuleBlock",
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
                        "name": "inner",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 227,
                        "end": 232
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 235,
                        "end": 240
                      },
                      "definite": false,
                      "start": 227,
                      "end": 240
                    }
                  ],
                  "declare": false,
                  "start": 223,
                  "end": 241
                }
              ],
              "start": 212,
              "end": 278
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 200,
            "end": 278
          }
        ],
        "start": 10,
        "end": 281
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 281
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 282
}
```
