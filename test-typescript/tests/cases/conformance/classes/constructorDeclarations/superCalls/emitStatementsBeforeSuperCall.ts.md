emitStatementsBeforeSuperCall.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 375,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
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
      "start": 15,
      "end": 188,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 188,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 62,
            "end": 171,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 73,
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
              "start": 73,
              "end": 171,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 171,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 120,
                    "expression": {
                      "type": "CallExpression",
                      "start": 102,
                      "end": 119,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 114,
                          "end": 118,
                          "raw": "'hi'",
                          "value": "hi"
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 113,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 109,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 113,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 157,
                    "end": 165,
                    "expression": {
                      "type": "CallExpression",
                      "start": 157,
                      "end": 164,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 157,
                        "end": 162
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
                  "start": 74,
                  "end": 90,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 90,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 84,
                        "end": 90
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 186,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 181,
              "decorators": [],
              "name": "field",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 184,
              "end": 185,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 24,
        "decorators": [],
        "name": "Sub",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 33,
        "end": 37,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 190,
      "end": 374,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 214,
        "end": 374,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 220,
            "end": 233,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 224,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 232,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 226,
                "end": 232
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 372,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 267,
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
              "start": 267,
              "end": 372,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 286,
                "end": 372,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 296,
                    "end": 298,
                    "expression": {
                      "type": "Literal",
                      "start": 296,
                      "end": 297,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 335,
                    "end": 343,
                    "expression": {
                      "type": "CallExpression",
                      "start": 335,
                      "end": 342,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 335,
                        "end": 340
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 352,
                    "end": 366,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 352,
                      "end": 365,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 352,
                        "end": 361,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 352,
                          "end": 356
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 357,
                          "end": 361,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 364,
                        "end": 365,
                        "raw": "1",
                        "value": 1
                      }
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
                  "start": 268,
                  "end": 284,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 284,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 276,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 278,
                        "end": 284
                      }
                    }
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
        "start": 196,
        "end": 200,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 209,
        "end": 213,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
