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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 26,
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
            "value": "my-fake-sym",
            "raw": "\"my-fake-sym\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 185,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 35,
        "end": 185,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 185,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 55,
              "end": 103,
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
              "value": {
                "type": "FunctionExpression",
                "start": 66,
                "end": 103,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 69,
                  "end": 103,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 79,
                      "end": 97,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 79,
                        "end": 96,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 79,
                          "end": 89,
                          "object": {
                            "type": "ThisExpression",
                            "start": 79,
                            "end": 83
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 88,
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 92,
                          "end": 96,
                          "value": "ok",
                          "raw": "\"ok\""
                        }
                      },
                      "directive": null
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
            },
            {
              "type": "MethodDefinition",
              "start": 109,
              "end": 183,
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
              "value": {
                "type": "FunctionExpression",
                "start": 115,
                "end": 183,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 118,
                  "end": 183,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 128,
                      "end": 147,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 128,
                        "end": 146,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 128,
                          "end": 138,
                          "object": {
                            "type": "ThisExpression",
                            "start": 128,
                            "end": 132
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 133,
                            "end": 137,
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 141,
                          "end": 146,
                          "value": "yep",
                          "raw": "\"yep\""
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 156,
                      "end": 177,
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 162,
                          "end": 176,
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
                            "object": {
                              "type": "ThisExpression",
                              "start": 166,
                              "end": 170
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 175,
                              "decorators": [],
                              "name": "_sym",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": true
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
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
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
