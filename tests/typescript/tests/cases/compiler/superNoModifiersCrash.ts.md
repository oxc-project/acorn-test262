__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "initialize",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 29
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 42,
                          "end": 47
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "initialize",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 48,
                          "end": 58
                        },
                        "optional": false,
                        "computed": false,
                        "start": 42,
                        "end": 58
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 62,
                            "end": 71
                          },
                          "start": 59,
                          "end": 71
                        }
                      ],
                      "optional": false,
                      "start": 42,
                      "end": 72
                    },
                    "directive": null,
                    "start": 42,
                    "end": 72
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 88,
                          "end": 92
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asdf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 93,
                          "end": 97
                        },
                        "optional": false,
                        "computed": false,
                        "start": 88,
                        "end": 97
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 100,
                        "end": 102
                      },
                      "start": 88,
                      "end": 102
                    },
                    "start": 81,
                    "end": 102
                  }
                ],
                "start": 32,
                "end": 108
              },
              "expression": false,
              "start": 29,
              "end": 108
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 19,
            "end": 108
          }
        ],
        "start": 13,
        "end": 112
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 112
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 125
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 140
      },
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
              "name": "initialize",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 157
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
                "body": [],
                "start": 160,
                "end": 167
              },
              "expression": false,
              "start": 157,
              "end": 167
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 147,
            "end": 167
          }
        ],
        "start": 141,
        "end": 169
      },
      "abstract": false,
      "declare": false,
      "start": 114,
      "end": 169
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 169
}
```
