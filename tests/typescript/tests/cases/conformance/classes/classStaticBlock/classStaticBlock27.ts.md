__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 305,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 305,
      "expression": {
        "type": "UnaryExpression",
        "start": 57,
        "end": 305,
        "operator": "void",
        "argument": {
          "type": "ClassExpression",
          "start": 62,
          "end": 305,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 71,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 72,
            "end": 305,
            "body": [
              {
                "type": "PropertyDefinition",
                "start": 78,
                "end": 93,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 89,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": null,
                "value": {
                  "type": "Literal",
                  "start": 92,
                  "end": 93,
                  "value": 1,
                  "raw": "1"
                },
                "computed": false,
                "static": true,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null
              },
              {
                "type": "StaticBlock",
                "start": 98,
                "end": 163,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 115,
                    "end": 137,
                    "expression": {
                      "type": "CallExpression",
                      "start": 115,
                      "end": 136,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 115,
                        "end": 126,
                        "object": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 122,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 126,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 127,
                          "end": 135,
                          "object": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 130,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 131,
                            "end": 135,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 146,
                    "end": 157,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 146,
                      "end": 156,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 146,
                        "end": 154,
                        "object": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 149,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 154,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              {
                "type": "StaticBlock",
                "start": 168,
                "end": 233,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 185,
                    "end": 207,
                    "expression": {
                      "type": "CallExpression",
                      "start": 185,
                      "end": 206,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 185,
                        "end": 196,
                        "object": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 192,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 196,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 197,
                          "end": 205,
                          "object": {
                            "type": "Identifier",
                            "start": 197,
                            "end": 200,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 201,
                            "end": 205,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 216,
                    "end": 227,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 216,
                      "end": 226,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 216,
                        "end": 224,
                        "object": {
                          "type": "Identifier",
                          "start": 216,
                          "end": 219,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 220,
                          "end": 224,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              {
                "type": "StaticBlock",
                "start": 238,
                "end": 303,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 255,
                    "end": 277,
                    "expression": {
                      "type": "CallExpression",
                      "start": 255,
                      "end": 276,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 255,
                        "end": 266,
                        "object": {
                          "type": "Identifier",
                          "start": 255,
                          "end": 262,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 266,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 267,
                          "end": 275,
                          "object": {
                            "type": "Identifier",
                            "start": 267,
                            "end": 270,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 271,
                            "end": 275,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 286,
                    "end": 297,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 286,
                      "end": 296,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 286,
                        "end": 294,
                        "object": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 289,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 294,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  }
                ]
              }
            ]
          },
          "abstract": false,
          "declare": false
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
