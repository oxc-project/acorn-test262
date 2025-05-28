__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 125,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
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
        "start": 8,
        "end": 125,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 123,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 123,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 123,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 30,
                    "end": 49,
                    "id": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 44,
                      "decorators": [],
                      "name": "other",
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
                      "start": 47,
                      "end": 49,
                      "body": []
                    },
                    "expression": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 56,
                    "end": 112,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 60,
                        "end": 111,
                        "id": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 62,
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 65,
                          "end": 111,
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "AwaitExpression",
                            "start": 77,
                            "end": 111,
                            "argument": {
                              "type": "CallExpression",
                              "start": 83,
                              "end": 111,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 83,
                                "end": 94,
                                "object": {
                                  "type": "Identifier",
                                  "start": 83,
                                  "end": 88,
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 89,
                                  "end": 94,
                                  "decorators": [],
                                  "name": "apply",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 95,
                                  "end": 99
                                },
                                {
                                  "type": "Identifier",
                                  "start": 101,
                                  "end": 110,
                                  "decorators": [],
                                  "name": "arguments",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            }
                          },
                          "id": null,
                          "generator": false
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
            "kind": "method",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
