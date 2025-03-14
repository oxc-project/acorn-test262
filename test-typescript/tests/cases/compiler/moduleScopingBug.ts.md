moduleScopingBug.ts
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 41,
            "end": 98,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 74,
                        "decorators": [],
                        "name": "inner",
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 82,
                        "decorators": [],
                        "name": "outer",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "params": []
          },
          {
            "type": "ClassDeclaration",
            "start": 104,
            "end": 194,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 112,
              "end": 194,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 123,
                  "end": 187,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 134,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 134,
                    "end": 187,
                    "async": false,
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 155,
                                "end": 160,
                                "decorators": [],
                                "name": "inner",
                                "optional": false
                              },
                              "init": {
                                "type": "Identifier",
                                "start": 163,
                                "end": 168,
                                "decorators": [],
                                "name": "outer",
                                "optional": false
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 200,
            "end": 275,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 229,
                        "decorators": [],
                        "name": "inner",
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 237,
                        "decorators": [],
                        "name": "outer",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "kind": "module"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
