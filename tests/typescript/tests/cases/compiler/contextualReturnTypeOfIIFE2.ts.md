__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "app",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 38
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 42,
                "end": 46
              },
              "start": 40,
              "end": 46
            },
            "body": null,
            "expression": false,
            "start": 26,
            "end": 47
          }
        ],
        "start": 22,
        "end": 49
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 54
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 58
            },
            "optional": false,
            "computed": false,
            "start": 51,
            "end": 58
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 62
          },
          "optional": false,
          "computed": false,
          "start": 51,
          "end": 62
        },
        "right": {
          "type": "CallExpression",
          "callee": {
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
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someFun",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 95
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 104,
                                "end": 110
                              },
                              "start": 102,
                              "end": 110
                            },
                            "start": 99,
                            "end": 110
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 115,
                          "end": 117
                        },
                        "id": null,
                        "generator": false,
                        "start": 98,
                        "end": 117
                      },
                      "definite": false,
                      "start": 88,
                      "end": 117
                    }
                  ],
                  "declare": false,
                  "start": 82,
                  "end": 118
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someFun",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 137
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someFun",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 137
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 130,
                        "end": 137
                      }
                    ],
                    "start": 128,
                    "end": 139
                  },
                  "start": 121,
                  "end": 140
                }
              ],
              "start": 78,
              "end": 142
            },
            "expression": false,
            "start": 66,
            "end": 142
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 65,
          "end": 145
        },
        "start": 51,
        "end": 145
      },
      "directive": null,
      "start": 51,
      "end": 146
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "app",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 151
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 155
              },
              "optional": false,
              "computed": false,
              "start": 148,
              "end": 155
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 159
            },
            "optional": false,
            "computed": false,
            "start": 148,
            "end": 159
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someFun",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 167
          },
          "optional": false,
          "computed": false,
          "start": 148,
          "end": 167
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 168,
            "end": 169
          }
        ],
        "optional": false,
        "start": 148,
        "end": 170
      },
      "directive": null,
      "start": 148,
      "end": 171
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
