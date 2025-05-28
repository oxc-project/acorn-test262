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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 141,
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
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 141,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 141,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 38,
                    "end": 135,
                    "test": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 46,
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null
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
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 62,
                            "end": 75,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 62,
                              "end": 68,
                              "object": {
                                "type": "ThisExpression",
                                "start": 62,
                                "end": 66
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 67,
                                "end": 68,
                                "decorators": [],
                                "name": "p",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 71,
                              "end": 75,
                              "value": null,
                              "raw": "null"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 100,
                      "end": 135,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 114,
                          "end": 125,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 114,
                            "end": 124,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 114,
                              "end": 120,
                              "object": {
                                "type": "ThisExpression",
                                "start": 114,
                                "end": 118
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 119,
                                "end": 120,
                                "decorators": [],
                                "name": "p",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 123,
                              "end": 124,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
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
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 22,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "object": {
            "type": "NewExpression",
            "start": 1,
            "end": 8,
            "callee": {
              "type": "Identifier",
              "start": 5,
              "end": 6,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 10,
            "end": 11,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 14,
          "end": 22,
          "value": "string",
          "raw": "\"string\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
