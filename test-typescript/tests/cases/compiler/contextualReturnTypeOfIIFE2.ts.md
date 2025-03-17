__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "app",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 49,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 26,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 46,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 42,
                "end": 46
              }
            }
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 146,
      "expression": {
        "type": "AssignmentExpression",
        "start": 51,
        "end": 145,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 51,
          "end": 62,
          "object": {
            "type": "MemberExpression",
            "start": 51,
            "end": 58,
            "object": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "name": "app",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 65,
          "end": 145,
          "callee": {
            "type": "FunctionExpression",
            "start": 66,
            "end": 142,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 78,
              "end": 142,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 82,
                  "end": 118,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 117,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 95,
                        "name": "someFun",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 98,
                        "end": 117,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 99,
                            "end": 110,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 102,
                              "end": 110,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 104,
                                "end": 110
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 115,
                          "end": 117,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 121,
                  "end": 140,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 128,
                    "end": 139,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 130,
                        "end": 137,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 137,
                          "name": "someFun",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 137,
                          "name": "someFun",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 171,
      "expression": {
        "type": "CallExpression",
        "start": 148,
        "end": 170,
        "callee": {
          "type": "MemberExpression",
          "start": 148,
          "end": 167,
          "object": {
            "type": "MemberExpression",
            "start": 148,
            "end": 159,
            "object": {
              "type": "MemberExpression",
              "start": 148,
              "end": 155,
              "object": {
                "type": "Identifier",
                "start": 148,
                "end": 151,
                "name": "app",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 152,
                "end": 155,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 156,
              "end": 159,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 167,
            "name": "someFun",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 168,
            "end": 169,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
