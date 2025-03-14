__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
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
      "end": 195,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 195,
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
            "end": 130,
            "expression": {
              "type": "YieldExpression",
              "start": 116,
              "end": 129,
              "argument": {
                "type": "NewExpression",
                "start": 122,
                "end": 129,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 129,
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
            "start": 135,
            "end": 149,
            "expression": {
              "type": "YieldExpression",
              "start": 135,
              "end": 148,
              "argument": {
                "type": "NewExpression",
                "start": 141,
                "end": 148,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 148,
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
            "start": 154,
            "end": 171,
            "expression": {
              "type": "YieldExpression",
              "start": 154,
              "end": 170,
              "argument": {
                "type": "ArrayExpression",
                "start": 161,
                "end": 170,
                "elements": [
                  {
                    "type": "NewExpression",
                    "start": 162,
                    "end": 169,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 169,
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
            "start": 176,
            "end": 193,
            "expression": {
              "type": "YieldExpression",
              "start": 176,
              "end": 192,
              "argument": {
                "type": "ArrayExpression",
                "start": 183,
                "end": 192,
                "elements": [
                  {
                    "type": "NewExpression",
                    "start": 184,
                    "end": 191,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 191,
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
  "sourceType": "script",
  "hashbang": null
}
```
