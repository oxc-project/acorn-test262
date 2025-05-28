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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 112,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 108,
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
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 108,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 108,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 42,
                    "end": 72,
                    "expression": {
                      "type": "CallExpression",
                      "start": 42,
                      "end": 72,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 42,
                        "end": 58,
                        "object": {
                          "type": "Super",
                          "start": 42,
                          "end": 47
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 58,
                          "decorators": [],
                          "name": "initialize",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                      "optional": false
                    },
                    "directive": null
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 88,
                          "end": 92
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 97,
                          "decorators": [],
                          "name": "asdf",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 100,
                        "end": 102,
                        "value": "",
                        "raw": "''"
                      }
                    }
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
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 169,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 169,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 147,
            "end": 167,
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
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 167,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 160,
                "end": 167,
                "body": []
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
