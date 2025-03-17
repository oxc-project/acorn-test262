__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 25,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 25,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 20,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 20,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 16,
              "end": 20,
              "literal": {
                "type": "Literal",
                "start": 16,
                "end": 20,
                "raw": "true",
                "value": true
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 111,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 111,
        "body": [
          {
            "type": "IfStatement",
            "start": 44,
            "end": 109,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 76,
              "end": 109,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 82,
                  "end": 105,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 82,
                    "end": 104,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 86,
                        "end": 103,
                        "computed": false,
                        "object": {
                          "type": "MetaProperty",
                          "start": 86,
                          "end": 96,
                          "meta": {
                            "type": "Identifier",
                            "start": 86,
                            "end": 89,
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 96,
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 103,
                          "decorators": [],
                          "name": "marked",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 85,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 48,
              "end": 74,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 48,
                "end": 65,
                "computed": false,
                "object": {
                  "type": "MetaProperty",
                  "start": 48,
                  "end": 58,
                  "meta": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 51,
                    "decorators": [],
                    "name": "new",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 58,
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 65,
                  "decorators": [],
                  "name": "marked",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 70,
                "end": 74,
                "raw": "true",
                "value": true
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 129,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 113,
        "end": 128,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 113,
          "end": 121,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 121,
            "decorators": [],
            "name": "marked",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 124,
          "end": 128,
          "raw": "true",
          "value": true
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
