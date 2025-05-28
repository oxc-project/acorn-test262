__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 458,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 458,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
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
        "end": 458,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 411,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 81,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 411,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 82,
                  "end": 90,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 85,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 88,
                    "end": 90,
                    "properties": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 411,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 96,
                    "end": 114,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 102,
                        "end": 113,
                        "id": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 105,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 108,
                          "end": 113,
                          "value": "bar",
                          "raw": "\"bar\""
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 148,
                    "end": 163,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 148,
                      "end": 162,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 148,
                        "end": 156,
                        "object": {
                          "type": "ThisExpression",
                          "start": 148,
                          "end": 152
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 156,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 162,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 197,
                    "end": 230,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 203,
                        "end": 229,
                        "id": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 212,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 215,
                          "end": 229,
                          "object": {
                            "type": "ThisExpression",
                            "start": 215,
                            "end": 219
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 220,
                            "end": 229,
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 264,
                    "end": 289,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 264,
                      "end": 288,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 264,
                        "end": 272,
                        "object": {
                          "type": "ThisExpression",
                          "start": 264,
                          "end": 268
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 269,
                          "end": 272,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 275,
                        "end": 288,
                        "object": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 284,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 285,
                          "end": 288,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 323,
                    "end": 349,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 323,
                      "end": 348,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 323,
                        "end": 331,
                        "object": {
                          "type": "ThisExpression",
                          "start": 323,
                          "end": 327
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 328,
                          "end": 331,
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 334,
                        "end": 348,
                        "object": {
                          "type": "Identifier",
                          "start": 334,
                          "end": 343,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 344,
                          "end": 347,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 383,
                    "end": 408,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 383,
                      "end": 407,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 383,
                        "end": 395,
                        "object": {
                          "type": "ThisExpression",
                          "start": 383,
                          "end": 387
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 388,
                          "end": 395,
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 398,
                        "end": 407,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 414,
            "end": 456,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 418,
              "end": 427,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 427,
              "end": 456,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 430,
                "end": 456,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 434,
                    "end": 453,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 441,
                      "end": 452,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 443,
                          "end": 450,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 443,
                            "end": 446,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 448,
                            "end": 450,
                            "properties": []
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
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
  "sourceType": "script",
  "hashbang": null
}
```
