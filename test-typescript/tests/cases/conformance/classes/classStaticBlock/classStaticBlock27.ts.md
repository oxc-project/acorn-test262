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
        "prefix": true,
        "argument": {
          "type": "ClassExpression",
          "start": 62,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 71,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "superClass": null,
          "body": {
            "type": "ClassBody",
            "start": 72,
            "end": 305,
            "body": [
              {
                "type": "PropertyDefinition",
                "start": 78,
                "end": 93,
                "static": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 89,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 92,
                  "end": 93,
                  "value": 1,
                  "raw": "1"
                },
                "decorators": [],
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "typeAnnotation": null,
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 126,
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
                          "type": "MemberExpression",
                          "start": 127,
                          "end": 135,
                          "object": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 130,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 131,
                            "end": 135,
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 154,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 196,
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
                          "type": "MemberExpression",
                          "start": 197,
                          "end": 205,
                          "object": {
                            "type": "Identifier",
                            "start": 197,
                            "end": 200,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 201,
                            "end": 205,
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 220,
                          "end": 224,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 266,
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
                          "type": "MemberExpression",
                          "start": 267,
                          "end": 275,
                          "object": {
                            "type": "Identifier",
                            "start": 267,
                            "end": 270,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 271,
                            "end": 275,
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 294,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              }
            ]
          },
          "decorators": [],
          "typeParameters": null,
          "implements": [],
          "abstract": false,
          "declare": false,
          "superTypeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
