__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "Literal",
            "value": "my-fake-sym",
            "raw": "\"my-fake-sym\"",
            "start": 13,
            "end": 26
          },
          "definite": false,
          "start": 6,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 48
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 66
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 79,
                            "end": 83
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 84,
                            "end": 88
                          },
                          "optional": false,
                          "computed": true,
                          "start": 79,
                          "end": 89
                        },
                        "right": {
                          "type": "Literal",
                          "value": "ok",
                          "raw": "\"ok\"",
                          "start": 92,
                          "end": 96
                        },
                        "start": 79,
                        "end": 96
                      },
                      "directive": null,
                      "start": 79,
                      "end": 97
                    }
                  ],
                  "start": 69,
                  "end": 103
                },
                "expression": false,
                "start": 66,
                "end": 103
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 55,
              "end": 103
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 115
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 128,
                            "end": 132
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 133,
                            "end": 137
                          },
                          "optional": false,
                          "computed": true,
                          "start": 128,
                          "end": 138
                        },
                        "right": {
                          "type": "Literal",
                          "value": "yep",
                          "raw": "\"yep\"",
                          "start": 141,
                          "end": 146
                        },
                        "start": 128,
                        "end": 146
                      },
                      "directive": null,
                      "start": 128,
                      "end": 147
                    },
                    {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 162,
                            "end": 163
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 166,
                              "end": 170
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_sym",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 171,
                              "end": 175
                            },
                            "optional": false,
                            "computed": true,
                            "start": 166,
                            "end": 176
                          },
                          "definite": false,
                          "start": 162,
                          "end": 176
                        }
                      ],
                      "declare": false,
                      "start": 156,
                      "end": 177
                    }
                  ],
                  "start": 118,
                  "end": 183
                },
                "expression": false,
                "start": 115,
                "end": 183
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 109,
              "end": 183
            }
          ],
          "start": 49,
          "end": 185
        },
        "abstract": false,
        "declare": false,
        "start": 35,
        "end": 185
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 28,
      "end": 185
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 185
}
```
