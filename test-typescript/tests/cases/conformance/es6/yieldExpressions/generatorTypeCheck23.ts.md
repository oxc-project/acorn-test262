__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 23,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 21,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
      "type": "ClassDeclaration",
      "start": 24,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 59,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 57,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
      "type": "ClassDeclaration",
      "start": 60,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "name": "Baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 83,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 72,
            "end": 81,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 96,
        "name": "g3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 214,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 105,
            "end": 111,
            "expression": {
              "type": "YieldExpression",
              "start": 105,
              "end": 110,
              "delegate": false,
              "argument": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 116,
            "end": 130,
            "expression": {
              "type": "YieldExpression",
              "start": 116,
              "end": 129,
              "delegate": false,
              "argument": {
                "type": "NewExpression",
                "start": 122,
                "end": 129,
                "callee": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 129,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 135,
            "end": 149,
            "expression": {
              "type": "YieldExpression",
              "start": 135,
              "end": 148,
              "delegate": false,
              "argument": {
                "type": "NewExpression",
                "start": 141,
                "end": 148,
                "callee": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 148,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 154,
            "end": 168,
            "expression": {
              "type": "YieldExpression",
              "start": 154,
              "end": 167,
              "delegate": false,
              "argument": {
                "type": "NewExpression",
                "start": 160,
                "end": 167,
                "callee": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 167,
                  "name": "Baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 173,
            "end": 190,
            "expression": {
              "type": "YieldExpression",
              "start": 173,
              "end": 189,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 180,
                "end": 189,
                "elements": [
                  {
                    "type": "NewExpression",
                    "start": 181,
                    "end": 188,
                    "callee": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 188,
                      "name": "Bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 195,
            "end": 212,
            "expression": {
              "type": "YieldExpression",
              "start": 195,
              "end": 211,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 202,
                "end": 211,
                "elements": [
                  {
                    "type": "NewExpression",
                    "start": 203,
                    "end": 210,
                    "callee": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 210,
                      "name": "Baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
