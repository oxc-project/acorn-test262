__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "app",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 46,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 42,
                "end": 46
              }
            },
            "body": null,
            "expression": false
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
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 78,
              "end": 142,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 82,
                  "end": 118,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 117,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 95,
                        "decorators": [],
                        "name": "someFun",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 98,
                        "end": 117,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 99,
                            "end": 110,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 102,
                              "end": 110,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 104,
                                "end": 110
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 115,
                          "end": 117,
                          "body": []
                        },
                        "id": null,
                        "generator": false
                      },
                      "definite": false
                    }
                  ],
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 137,
                          "decorators": [],
                          "name": "someFun",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 137,
                          "decorators": [],
                          "name": "someFun",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": true,
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
          "typeArguments": null,
          "arguments": [],
          "optional": false
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
                "decorators": [],
                "name": "app",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 152,
                "end": 155,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 156,
              "end": 159,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 167,
            "decorators": [],
            "name": "someFun",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 168,
            "end": 169,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
