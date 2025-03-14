generatorTypeCheck24.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 218,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 23,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 21,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 24,
      "end": 59,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 59,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 57,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 60,
      "end": 83,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 83,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 72,
            "end": 81,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 218,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 218,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 105,
            "end": 111,
            "expression": {
              "type": "YieldExpression",
              "start": 105,
              "end": 110,
              "argument": null,
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 116,
            "end": 134,
            "expression": {
              "type": "YieldExpression",
              "start": 116,
              "end": 133,
              "argument": {
                "type": "ArrayExpression",
                "start": 124,
                "end": 133,
                "elements": [
                  {
                    "type": "NewExpression",
                    "start": 125,
                    "end": 132,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 132,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  }
                ]
              },
              "delegate": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 153,
            "expression": {
              "type": "YieldExpression",
              "start": 139,
              "end": 152,
              "argument": {
                "type": "NewExpression",
                "start": 145,
                "end": 152,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 152,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
                }
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 158,
            "end": 172,
            "expression": {
              "type": "YieldExpression",
              "start": 158,
              "end": 171,
              "argument": {
                "type": "NewExpression",
                "start": 164,
                "end": 171,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 171,
                  "decorators": [],
                  "name": "Baz",
                  "optional": false
                }
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 177,
            "end": 194,
            "expression": {
              "type": "YieldExpression",
              "start": 177,
              "end": 193,
              "argument": {
                "type": "ArrayExpression",
                "start": 184,
                "end": 193,
                "elements": [
                  {
                    "type": "NewExpression",
                    "start": 185,
                    "end": 192,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 192,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false
                    }
                  }
                ]
              },
              "delegate": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 199,
            "end": 216,
            "expression": {
              "type": "YieldExpression",
              "start": 199,
              "end": 215,
              "argument": {
                "type": "ArrayExpression",
                "start": 206,
                "end": 215,
                "elements": [
                  {
                    "type": "NewExpression",
                    "start": 207,
                    "end": 214,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 214,
                      "decorators": [],
                      "name": "Baz",
                      "optional": false
                    }
                  }
                ]
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 96,
        "decorators": [],
        "name": "g3",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
