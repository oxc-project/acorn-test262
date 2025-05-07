__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 141,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 141,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 38,
                    "end": 135,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 100,
                      "end": 135,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 114,
                          "end": 125,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 114,
                            "end": 124,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 114,
                              "end": 120,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 114,
                                "end": 118
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 119,
                                "end": 120,
                                "decorators": [],
                                "name": "p",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 123,
                              "end": 124,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      ]
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 48,
                      "end": 86,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 62,
                          "end": 76,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 62,
                            "end": 75,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 62,
                              "end": 68,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 62,
                                "end": 66
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 67,
                                "end": 68,
                                "decorators": [],
                                "name": "p",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 71,
                              "end": 75,
                              "raw": "null",
                              "value": null,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 46,
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 23,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 22,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 1,
            "end": 8,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 5,
              "end": 6,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 10,
            "end": 11,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 14,
          "end": 22,
          "raw": "\"string\"",
          "value": "string",
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
