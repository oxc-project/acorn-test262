__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "value": true,
                "raw": "true"
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 25,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "f",
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
        "start": 40,
        "end": 111,
        "body": [
          {
            "type": "IfStatement",
            "start": 44,
            "end": 109,
            "test": {
              "type": "BinaryExpression",
              "start": 48,
              "end": 74,
              "left": {
                "type": "MemberExpression",
                "start": 48,
                "end": 65,
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
                "property": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 65,
                  "decorators": [],
                  "name": "marked",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 70,
                "end": 74,
                "value": true,
                "raw": "true"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 76,
              "end": 109,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 82,
                  "end": 105,
                  "expression": {
                    "type": "CallExpression",
                    "start": 82,
                    "end": 104,
                    "callee": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 85,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 86,
                        "end": 103,
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
                        "property": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 103,
                          "decorators": [],
                          "name": "marked",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 129,
      "expression": {
        "type": "AssignmentExpression",
        "start": 113,
        "end": 128,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 113,
          "end": 121,
          "object": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 121,
            "decorators": [],
            "name": "marked",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 124,
          "end": 128,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
