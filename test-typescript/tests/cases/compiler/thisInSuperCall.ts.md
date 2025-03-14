__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 372,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 42,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 40,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 40,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 40,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 33,
                      "end": 36
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 176,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 176,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 174,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 84,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 174,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 174,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 97,
                    "end": 109,
                    "expression": {
                      "type": "CallExpression",
                      "start": 97,
                      "end": 108,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 103,
                          "end": 107
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 97,
                        "end": 102
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 178,
      "end": 279,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 202,
        "end": 279,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 208,
            "end": 221,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 219,
              "end": 220,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "MethodDefinition",
            "start": 226,
            "end": 277,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 237,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 237,
              "end": 277,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 277,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 250,
                    "end": 262,
                    "expression": {
                      "type": "CallExpression",
                      "start": 250,
                      "end": 261,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 256,
                          "end": 260
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 250,
                        "end": 255
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 188,
        "decorators": [],
        "name": "Foo2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 201,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 281,
      "end": 372,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 305,
        "end": 372,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 311,
            "end": 370,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 322,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 322,
              "end": 370,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 333,
                "end": 370,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 343,
                    "end": 355,
                    "expression": {
                      "type": "CallExpression",
                      "start": 343,
                      "end": 354,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 349,
                          "end": 353
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 343,
                        "end": 348
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 323,
                  "end": 331,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 331,
                    "decorators": [],
                    "name": "p",
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 291,
        "decorators": [],
        "name": "Foo3",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 300,
        "end": 304,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
