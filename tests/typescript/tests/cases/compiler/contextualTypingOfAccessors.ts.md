__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 53
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 59,
                                "end": 65
                              },
                              "start": 57,
                              "end": 65
                            },
                            "start": 56,
                            "end": 65
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 70,
                            "end": 76
                          },
                          "start": 67,
                          "end": 76
                        },
                        "start": 55,
                        "end": 76
                      },
                      "start": 53,
                      "end": 76
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 50,
                    "end": 77
                  }
                ],
                "start": 45,
                "end": 79
              },
              "start": 43,
              "end": 79
            },
            "start": 42,
            "end": 79
          },
          "init": null,
          "definite": false,
          "start": 42,
          "end": 79
        }
      ],
      "declare": false,
      "start": 38,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 83
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "get",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 98
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 117,
                            "end": 118
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 122
                        },
                        "id": null,
                        "generator": false,
                        "start": 116,
                        "end": 122
                      },
                      "start": 109,
                      "end": 122
                    }
                  ],
                  "start": 101,
                  "end": 127
                },
                "expression": false,
                "start": 98,
                "end": 127
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 91,
              "end": 127
            },
            {
              "type": "Property",
              "kind": "set",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 139
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 143,
                  "end": 145
                },
                "expression": false,
                "start": 139,
                "end": 145
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 132,
              "end": 145
            }
          ],
          "start": 86,
          "end": 147
        },
        "start": 82,
        "end": 147
      },
      "directive": null,
      "start": 82,
      "end": 147
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 38,
  "end": 147
}
```
