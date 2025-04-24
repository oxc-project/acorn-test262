__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 112,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 112,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 29,
              "decorators": [],
              "name": "initialize",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 108,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 108,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 42,
                    "end": 72,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 42,
                      "end": 72,
                      "arguments": [
                        {
                          "type": "SpreadElement",
                          "start": 59,
                          "end": 71,
                          "argument": {
                            "type": "Identifier",
                            "start": 62,
                            "end": 71,
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 42,
                        "end": 58,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 42,
                          "end": 47
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 58,
                          "decorators": [],
                          "name": "initialize",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 81,
                    "end": 102,
                    "argument": {
                      "type": "AssignmentExpression",
                      "start": 88,
                      "end": 102,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 88,
                        "end": 97,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 88,
                          "end": 92
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 97,
                          "decorators": [],
                          "name": "asdf",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 100,
                        "end": 102,
                        "raw": "''",
                        "value": ""
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 169,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 169,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 147,
            "end": 167,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 157,
              "decorators": [],
              "name": "initialize",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 167,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 160,
                "end": 167,
                "body": []
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
        "start": 120,
        "end": 125,
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 134,
        "end": 140,
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
