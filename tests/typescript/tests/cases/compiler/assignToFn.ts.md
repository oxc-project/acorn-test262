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
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 34
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 37,
                          "end": 43
                        },
                        "start": 36,
                        "end": 43
                      },
                      "start": 35,
                      "end": 43
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 45,
                      "end": 52
                    },
                    "start": 44,
                    "end": 52
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 33,
                  "end": 53
                }
              ],
              "start": 30,
              "end": 59
            },
            "declare": false,
            "start": 18,
            "end": 59
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 72
                      },
                      "typeArguments": null,
                      "start": 71,
                      "end": 72
                    },
                    "start": 70,
                    "end": 72
                  },
                  "start": 69,
                  "end": 72
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 75,
                        "end": 76
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 86,
                            "end": 87
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 98,
                                "end": 102
                              },
                              "start": 91,
                              "end": 103
                            }
                          ],
                          "start": 89,
                          "end": 105
                        },
                        "expression": false,
                        "start": 77,
                        "end": 105
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 75,
                      "end": 105
                    }
                  ],
                  "start": 73,
                  "end": 107
                },
                "definite": false,
                "start": 69,
                "end": 107
              }
            ],
            "declare": false,
            "start": 65,
            "end": 108
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 115
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 117
                },
                "optional": false,
                "computed": false,
                "start": 114,
                "end": 117
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 118,
                "end": 125
              },
              "start": 114,
              "end": 125
            },
            "directive": null,
            "start": 114,
            "end": 126
          }
        ],
        "start": 12,
        "end": 128
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 128
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 128
}
```
