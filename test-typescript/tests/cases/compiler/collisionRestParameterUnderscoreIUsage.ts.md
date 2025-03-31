__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 49,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 49,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 23,
                    "end": 47,
                    "key": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 26,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 27,
                        "end": 39,
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 31,
                          "end": 39,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 33,
                            "end": 39
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 57,
            "name": "_i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 60,
            "end": 92,
            "value": "This is what I'd expect to see",
            "raw": "\"This is what I'd expect to see\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 94,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 103,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 201,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 121,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 201,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 122,
                  "end": 136,
                  "argument": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 129,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 129,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 131,
                      "end": 136,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 131,
                        "end": 134
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 201,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 148,
                    "end": 164,
                    "expression": {
                      "type": "CallExpression",
                      "start": 148,
                      "end": 163,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 148,
                        "end": 159,
                        "object": {
                          "type": "Identifier",
                          "start": 148,
                          "end": 155,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 159,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 160,
                          "end": 162,
                          "name": "_i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 214,
      "expression": {
        "type": "NewExpression",
        "start": 204,
        "end": 213,
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 211,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
