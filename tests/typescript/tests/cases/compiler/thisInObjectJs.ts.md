__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 201,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 201,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 18,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 21,
            "end": 201,
            "properties": [
              {
                "type": "Property",
                "start": 25,
                "end": 30,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 28,
                  "end": 30,
                  "value": 10,
                  "raw": "10"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 34,
                "end": 40,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 37,
                  "end": 40,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 38,
                      "end": 39,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 44,
                "end": 94,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 47,
                  "decorators": [],
                  "name": "fun",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 49,
                  "end": 94,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 60,
                    "end": 94,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 66,
                        "end": 76,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 66,
                          "end": 76,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 66,
                            "end": 72,
                            "object": {
                              "type": "ThisExpression",
                              "start": 66,
                              "end": 70
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 71,
                              "end": 72,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 75,
                            "end": 76,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 81,
                        "end": 85,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 81,
                          "end": 85
                        },
                        "directive": null
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
                "start": 98,
                "end": 143,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 100,
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 102,
                  "end": 143,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 113,
                    "end": 143,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 119,
                        "end": 125,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 119,
                          "end": 125,
                          "object": {
                            "type": "ThisExpression",
                            "start": 119,
                            "end": 123
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 125,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 130,
                        "end": 134,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        },
                        "directive": null
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
                "start": 147,
                "end": 198,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 149,
                  "decorators": [],
                  "name": "f3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 152,
                  "end": 197,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 163,
                    "end": 197,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 169,
                        "end": 179,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 169,
                          "end": 179,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 169,
                            "end": 175,
                            "object": {
                              "type": "ThisExpression",
                              "start": 169,
                              "end": 173
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 174,
                              "end": 175,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 178,
                            "end": 179,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 184,
                        "end": 188,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 184,
                          "end": 188
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
