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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 39,
                      "end": 44
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 47,
                      "end": 49
                    },
                    "expression": false,
                    "start": 30,
                    "end": 49
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 60,
                          "end": 62
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 83,
                                  "end": 88
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "apply",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 89,
                                  "end": 94
                                },
                                "optional": false,
                                "computed": false,
                                "start": 83,
                                "end": 94
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
                                  "decorators": [],
                                  "name": "arguments",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 101,
                                  "end": 110
                                }
                              ],
                              "optional": false,
                              "start": 83,
                              "end": 111
                            },
                            "start": 77,
                            "end": 111
                          },
                          "id": null,
                          "generator": false,
                          "start": 65,
                          "end": 111
                        },
                        "definite": false,
                        "start": 60,
                        "end": 111
                      }
                    ],
                    "declare": false,
                    "start": 56,
                    "end": 112
                  }
                ],
                "start": 22,
                "end": 117
              },
              "expression": false,
              "start": 19,
              "end": 117
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 13,
            "end": 117
          }
        ],
        "start": 8,
        "end": 119
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 119
}
```
