__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 125,
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
        "start": 9,
        "end": 125,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 56,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 56,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 30,
                  "end": 50,
                  "key": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 32,
                      "end": 40,
                      "name": "n",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 33,
                        "end": 40,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 34,
                          "end": 40
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 42,
                      "end": 49
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 62,
            "end": 105,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 66,
                "end": 104,
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 69,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 68,
                      "end": 69,
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
                        "name": "I",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 70,
                  "end": 104,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 72,
                      "end": 102,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 74,
                        "end": 102,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 83,
                            "end": 84,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 86,
                          "end": 102,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 88,
                              "end": 100,
                              "argument": {
                                "type": "Literal",
                                "start": 95,
                                "end": 99,
                                "value": true,
                                "raw": "true"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 111,
            "end": 123,
            "expression": {
              "type": "AssignmentExpression",
              "start": 111,
              "end": 122,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 111,
                "end": 114,
                "object": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 115,
                "end": 122,
                "value": "hello",
                "raw": "\"hello\""
              }
            },
            "directive": null
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
