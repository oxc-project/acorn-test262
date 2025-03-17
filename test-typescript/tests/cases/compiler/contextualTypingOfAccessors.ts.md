__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 148,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 79,
            "name": "x",
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
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 57,
                              "end": 65,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 59,
                                "end": 65
                              }
                            },
                            "decorators": [],
                            "optional": false
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 98,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "FunctionExpression",
                "start": 98,
                "end": 127,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 117,
                            "end": 118,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 122,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "kind": "get",
              "optional": false
            },
            {
              "type": "Property",
              "start": 132,
              "end": 145,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 136,
                "end": 139,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "FunctionExpression",
                "start": 139,
                "end": 145,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 143,
                  "end": 145,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "kind": "set",
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
