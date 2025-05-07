__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 26,
            "raw": "\"my-fake-sym\"",
            "value": "my-fake-sym",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 185,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 35,
        "end": 185,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 185,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 55,
              "end": 103,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 55,
                "end": 66,
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
                "start": 66,
                "end": 103,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 69,
                  "end": 103,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 79,
                      "end": 97,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 79,
                        "end": 96,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 79,
                          "end": 89,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 79,
                            "end": 83
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 88,
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 92,
                          "end": 96,
                          "raw": "\"ok\"",
                          "value": "ok",
                          "regex": null,
                          "bigint": null
                        }
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
            },
            {
              "type": "MethodDefinition",
              "start": 109,
              "end": 183,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 109,
                "end": 115,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 115,
                "end": 183,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 118,
                  "end": 183,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 128,
                      "end": 147,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 128,
                        "end": 146,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 128,
                          "end": 138,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 128,
                            "end": 132
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 133,
                            "end": 137,
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 141,
                          "end": 146,
                          "raw": "\"yep\"",
                          "value": "yep",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 156,
                      "end": 177,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 162,
                          "end": 176,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 163,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "MemberExpression",
                            "start": 166,
                            "end": 176,
                            "computed": true,
                            "object": {
                              "type": "ThisExpression",
                              "start": 166,
                              "end": 170
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 175,
                              "decorators": [],
                              "name": "_sym",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
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
          "start": 41,
          "end": 48,
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
