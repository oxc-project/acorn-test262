__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 20
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 23
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "composed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 43
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 59,
                          "end": 63
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 56,
                        "end": 63
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 65,
                      "end": 68
                    },
                    "expression": false,
                    "start": 46,
                    "end": 68
                  },
                  "definite": false,
                  "start": 35,
                  "end": 68
                }
              ],
              "declare": false,
              "start": 29,
              "end": 68
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 78
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "defineProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 93
                  },
                  "optional": false,
                  "computed": false,
                  "start": 72,
                  "end": 93
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "composed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 102
                  },
                  {
                    "type": "Literal",
                    "value": "name",
                    "raw": "'name'",
                    "start": 104,
                    "end": 110
                  },
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 118,
                          "end": 123
                        },
                        "value": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "composed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 125,
                              "end": 133
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 134,
                              "end": 136
                            },
                            "optional": false,
                            "computed": false,
                            "start": 125,
                            "end": 136
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "_test",
                            "raw": "'_test'",
                            "start": 139,
                            "end": 146
                          },
                          "start": 125,
                          "end": 146
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 118,
                        "end": 146
                      }
                    ],
                    "start": 112,
                    "end": 150
                  }
                ],
                "optional": false,
                "start": 72,
                "end": 151
              },
              "directive": null,
              "start": 72,
              "end": 151
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "composed",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 170
              },
              "start": 155,
              "end": 170
            }
          ],
          "start": 25,
          "end": 172
        },
        "expression": false,
        "start": 7,
        "end": 172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 172
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
}
```
