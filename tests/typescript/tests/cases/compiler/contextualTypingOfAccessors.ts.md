__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 147,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 79,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 79,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 79,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 45,
                "end": 79,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 50,
                    "end": 77,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 53,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 55,
                        "end": 76,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 56,
                            "end": 65,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 57,
                              "end": 65,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 59,
                                "end": 65
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 67,
                          "end": 76,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 70,
                            "end": 76
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 82,
      "end": 147,
      "expression": {
        "type": "AssignmentExpression",
        "start": 82,
        "end": 147,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 82,
          "end": 83,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 86,
          "end": 147,
          "properties": [
            {
              "type": "Property",
              "start": 91,
              "end": 127,
              "kind": "get",
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 98,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 98,
                "end": 127,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 101,
                  "end": 127,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 109,
                      "end": 122,
                      "argument": {
                        "type": "ArrowFunctionExpression",
                        "start": 116,
                        "end": 122,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 117,
                            "end": 118,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 122,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 132,
              "end": 145,
              "kind": "set",
              "key": {
                "type": "Identifier",
                "start": 136,
                "end": 139,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 139,
                "end": 145,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 143,
                  "end": 145,
                  "body": []
                },
                "expression": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
